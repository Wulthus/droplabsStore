import React from "react";

export type ProductContextType = {
    lastProduct: string,
    setLastProduct: React.Dispatch<React.SetStateAction<string>>,
}