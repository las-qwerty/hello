async function getRandomQuote() {
    const endpoint = 'https://api.quotable.io/random';
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = 'Failed to fetch the quote. Please try again.';
    }
}

window.onload = getRandomQuote;
