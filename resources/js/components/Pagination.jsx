import { Link } from "@inertiajs/react";

export const Pagination = ({ posts }) => {
    return (
        <>
            {posts.links.map((link) =>
                link.url ? (
                    <Link
                        href={link.url}
                        key={link.label}
                        className={`p-1 mx-1 ${
                            link.active ? "text-blue-500 font-bold" : ""
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={link.label}
                        className="p-1 mx-1 text-slate-400"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></span>
                )
            )}
        </>
    );
};
