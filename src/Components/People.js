import React, { useEffect, useState } from "react";
import Person from "./Person";

export default function People() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then((res) => res.json())
            .then((data) => {
                setPeople(data.data);
            });
    }, []);

    return (
        <article className="people">
            {people.map((person) => (
                <Person key={person.id} person={person} />
            ))}
        </article>
    );
}
