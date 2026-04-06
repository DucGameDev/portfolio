import React from "react";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-700 text-sm">
            <div className="max-w-6xl mx-auto px-4 py-6 text-center space-y-2">
                <p>
                    © 2026{" "}
                    <a
                        href="http://ducdev.work/"
                        className="text-primary hover:underline"
                    >
                        ducdev
                    </a>
                    . All rights reserved.
                </p>

                <p>
                    Build with <span className="text-red-500">♥</span> using{" "}
                    <span className="text-primary">React</span>. Hosted on{" "}
                    <a
                        href="https://github.com/DucGameDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        Github Pages
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}