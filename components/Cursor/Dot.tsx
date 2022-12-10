import { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";

const Dot = () => {
    const mousePosition = useMousePosition();
    const cursor_r = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cursor_r.current) {
            cursor_r.current.animate(
                [
                    {
                        transform: `translate(calc(${mousePosition.x}px - 1.25rem), calc(${mousePosition.y}px - 1.25rem))`,
                    },
                ],
                {
                    duration: 500,
                    fill: "forwards",
                    easing: "ease-in",
                }
            );
        }
    }, [mousePosition.x, mousePosition.y]);

    return (
        <div
            className="h-10 w-10 fixed rounded-full bg-red-600/30 pointer-events-none origin-center flex justify-center items-center"
            ref={cursor_r}
        >
            <div className="h-2 w-2 bg-red-900/40 rounded-full"></div>
        </div>
    );
};

export default Dot;
