export async function runRecon(domain) {
    const res = await fetch("http://localhost:3000/enumerate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
    });

    return res.json();
}
