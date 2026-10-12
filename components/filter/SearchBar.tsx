import { Search } from "lucide-react";

type Props = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isMapView?: boolean;
};

export default function SearchBar({ searchQuery, setSearchQuery, isMapView = false }: Props){
    return(
        <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                type="text"
                placeholder="店舗名で検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full appearance-none bg-white rounded-lg pl-12 pr-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm border border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-0 [-webkit-appearance:none] [-webkit-tap-highlight-color:transparent] ${
                    isMapView ? "focus:border-gray-200 sm:focus:border-indigo-400" : "focus:border-indigo-400"
                }`}
            />
        </div>
    );
}
