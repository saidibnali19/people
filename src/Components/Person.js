import React from "react";

export default function Person({ person }) {
    const { email, first_name, last_name, avatar } = person;

    return (
        <article className="person">
            <img
                className="person__image"
                src={avatar}
                alt={first_name + " " + last_name}
            />
            <div>
                <h2 className="person__name">
                    {first_name} {last_name}
                </h2>
                <p className="person__email">{email}</p>
            </div>
        </article>
    );
}
