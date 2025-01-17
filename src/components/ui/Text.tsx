import { FC, ReactNode } from "react"

interface TextProps {
    weight: "light" | "regular" | "medium" | "italic" | "medium-italic" | "bold-italic" | "semi-bold" | "bold",
    children: ReactNode,
    className: string
}

export const TitleText: FC<TextProps> = ({weight, children, className}) => {
    const fontWeight = setFontWeight(weight, "title")

    return (
        <span className={`${className} ${fontWeight}`}>{children}</span>
    )
}

export const BodyText: FC<TextProps> = ({weight, children, className}) => {
    const fontWeight = setFontWeight(weight, "body")

    return (
        <span className={`${className} ${fontWeight}`}>{children}</span>
    )
}

const setFontWeight = (weight: string, level: "title" | "body") => {
    switch (weight) {
        case "light":
            return level === "title" ? "" : "font-[family-name:var(--font-inter-light)]";
            
        case "regular":
            return level === "title" ? "font-[family-name:var(--font-dmsans-regular)]" : "font-[family-name:var(--font-inter-regular)]";
            
        case "medium":
            return level === "title" ? "font-[family-name:var(--font-dmsans-medium)]" : "font-[family-name:var(--font-inter-medium)]";
            
        case "semi-bold":
            return level === "title" ? "font-[family-name:var(--font-dmsans-semibold)]" : "font-[family-name:var(--font-inter-semibold)]";
            
        case "bold":
            return level === "title" ? "font-[family-name:var(--font-dmsans-bold)]" : "font-[family-name:var(--font-inter-bold)]";

        case "italic":
            return level === "title" ? "font-[family-name:var(--font-dmsans-italic)]" : "font-[family-name:var(--font-inter-italic)]";
            
        case "medium-italic":
            return level === "title" ? "font-[family-name:var(--font-dmsans-mediumitalic)]" : "font-[family-name:var(--font-inter-mediumitalic)]";
            
        case "bold-italic":
            return level === "title" ? "font-[family-name:var(--font-dmsans-bolditalic)]" : "font-[family-name:var(--font-inter-bolditalic)]";
    
        default:
            break;
    }
}