import React,{useEffect} from "react";


export default function App () {

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
    }

    useEffect( () => {
        getUser();
    },[])
}