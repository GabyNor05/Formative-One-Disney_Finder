import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import "../css/dropdown.css";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

// OMDb API details
const OMDB_BASE = "https://www.omdbapi.com/";
const OMDB_KEY = "8a711d9f"; // provided key

const Dropdown = ({ setSelectedTitle }) => {
    const [rawResults, setRawResults] = useState([]); // raw OMDb search results
    const [selectedValue, setSelectedValue] = useState(""); // imdbID selected
    const [searchTerm, setSearchTerm] = useState(""); // user input
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const debounceRef = useRef(null);

    // Perform search
    const searchTitles = async (q) => {
        if (!q || q.trim().length < 2) {
            setRawResults([]);
            setError(q.trim().length === 0 ? "" : "Type at least 2 characters");
            return;
        }
        try {
            setLoading(true);
            setError("");
            const url = `${OMDB_BASE}?s=${encodeURIComponent(q)}&type=movie&apikey=${OMDB_KEY}`;
            const { data } = await axios.get(url);
            if (data.Response === "True" && Array.isArray(data.Search)) {
                setRawResults(data.Search);
            } else {
                setRawResults([]);
                setError(data.Error || "No results found");
            }
        } catch (e) {
            console.error("OMDb search error:", e);
            setError("Failed to fetch titles");
            setRawResults([]);
        } finally {
            setLoading(false);
        }
    };

    // Debounce search on query changes
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            searchTitles(searchTerm);
        }, 300); // Slightly faster debounce
        return () => clearTimeout(debounceRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    // When a title is selected, fetch full details by imdbID
    const handleTitleClick = async (event) => {
        const imdbID = event.target.value;
        setSelectedValue(imdbID);
        if (!imdbID) return;
        try {
            setLoading(true);
            setError("");
            const url = `${OMDB_BASE}?i=${encodeURIComponent(imdbID)}&plot=short&apikey=${OMDB_KEY}`;
            const { data } = await axios.get(url);
            if (data && data.Response !== "False") {
                setSelectedTitle(data);
                console.log(`Selected Title: ${data.Title} (${data.imdbID})`);
            } else {
                setError(data?.Error || "Could not load title details");
            }
        } catch (e) {
            console.error("OMDb details error:", e);
            setError("Failed to fetch title details");
        } finally {
            setLoading(false);
        }
    };

    // Normalization + sorting similar to StudentFiles pattern
    const normalize = (v) => String(v || '').toLowerCase();
    const collator = useMemo(() => new Intl.Collator(undefined, { sensitivity: 'base' }), []);

    // Filter raw results again locally (extra safety if API returns broader matches)
    const filtered = useMemo(() => {
        let list = Array.isArray(rawResults) ? [...rawResults] : [];
        if (searchTerm.trim().length >= 2) {
            const q = normalize(searchTerm);
            list = list.filter(r => normalize(r.Title).includes(q));
        }
        // Sort by Title ascending for stable UX
        list.sort((a, b) => collator.compare(a.Title || '', b.Title || ''));
        return list;
    }, [rawResults, searchTerm, collator]);

    return (
        <div className="w-[400px] mt-4">
            <div className="search-bar flex items-center cursor-text">
                    <MagnifyingGlassIcon className="inline text-[#19BACC]" size={24} weight="light" />
                    <input
                        className="w-full h-full pl-2 bg-transparent text-white placeholder-white/70 outline-none"
                        placeholder="Search titles (e.g., Moana)"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
            </div>

            <select
                id="titles-dropdown"
                onChange={handleTitleClick}
                value={selectedValue}
                className="w-full"
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    margin: "10px 0",
                    color: selectedValue === "" ? "gray" : "white",
                }}
            >
                <option value="" enabled>
                    {loading ? `Searching "${searchTerm}"...` : (searchTerm.length < 2 ? "Type at least 2 characters" : filtered.length ? `Results (${filtered.length})` : (error || "No results"))}
                </option>
                {filtered.map(title => (
                    <option key={title.imdbID} value={title.imdbID}>
                        {title.Title} {title.Year ? `(${title.Year})` : ''}
                    </option>
                ))}
            </select>

            
        </div>
    );
};

export default Dropdown;