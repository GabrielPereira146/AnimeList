import { ComponentProps } from "react";

interface GenreProps extends ComponentProps<'span'> { }


export function Genre(props: GenreProps) {
    return (
        <span className="min-w-24 h-4 text-center rounded-lg bg-pink-800 text-white text-xs font-medium" {...props} />
    )
}