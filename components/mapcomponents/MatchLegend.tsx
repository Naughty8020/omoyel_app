"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MATCH_COLORS, MATCH_GRADIENT_STOPS } from "@/lib/match_colors";

export function MatchLegend() {
    const [isExpanded, setIsExpanded] = useState(false);
    const gradient = MATCH_GRADIENT_STOPS
        .map(stop => `${stop.color} ${stop.score}%`)
        .join(", ");

    return (
        <div className={`absolute left-3 top-40 z-20 rounded-2xl bg-white/95 text-xs text-gray-900 shadow-md ${isExpanded ? "right-3 px-3 py-2.5" : "px-3 py-2"} sm:right-auto sm:px-3 sm:py-3`} aria-label="ピンの色の説明">
            <div className="sm:hidden">
                <button
                    type="button"
                    onClick={() => setIsExpanded(current => !current)}
                    className="flex w-full items-center justify-between gap-2 font-bold"
                    aria-expanded={isExpanded}
                >
                    <span>{isExpanded ? "マッチ度" : "マッチ度を見る"}</span>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                {isExpanded && (
                    <div className="mt-2">
                        <div className="flex items-center gap-2">
                            <span className="shrink-0 text-[10px] font-medium text-gray-600">低い</span>
                            <span className="h-2.5 min-w-0 flex-1 rounded-full" style={{ background: `linear-gradient(to right, ${gradient})` }} />
                            <span className="shrink-0 text-[10px] font-medium text-gray-600">高い</span>
                        </div>
                        <div className="mt-2 flex items-center border-t border-gray-200 pt-2">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: MATCH_COLORS.favorite }} />
                                <span className="font-medium">お気に入り</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="hidden sm:block">
                <p className="mb-2 font-bold">マッチ度</p>
                <div className="flex items-end gap-3">
                    <span className="h-32 w-3.5 shrink-0 rounded-full" style={{ background: `linear-gradient(to bottom, ${gradient})` }} />
                    <div className="flex h-32 w-32 flex-col justify-between py-0.5 text-[11px] font-bold leading-none">
                        <span>低い <span className="font-normal text-gray-500">1</span></span>
                        <span>中間 <span className="font-normal text-gray-500">50</span></span>
                        <span>高い <span className="font-normal text-gray-500">100</span></span>
                    </div>
                </div>
                <div className="mt-2 flex items-center gap-2 border-t border-gray-200 pt-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: MATCH_COLORS.favorite }} />
                    <span className="font-medium">お気に入り</span>
                </div>
            </div>
        </div>
    );
}
