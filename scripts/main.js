document.addEventListener('DOMContentLoaded', () => {
    // Initialize CodeMirror editor
    const codeEditor = CodeMirror(document.getElementById('code-editor'), {
        mode: 'htmlmixed',
        lineNumbers: true,
        theme: 'dracula', // Optional: Choose a theme
    });

    // Update preview as user types
    codeEditor.on('change', () => {
        const code = codeEditor.getValue();
        const preview = document.getElementById('preview');
        preview.srcdoc = code;
    });

    // Example challenge data
    const challenges = [
        {
            description: 'Create a simple HTML page with a header and a paragraph.',
            initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge</title>\n</head>\n<body>\n    <h1>My Header</h1>\n    <p>My paragraph.</p>\n</body>\n</html>',
        },
        {
        description: 'Create a simple HTML page with a header and a paragraph.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge</title>\n</head>\n<body>\n    <h1>My Header</h1>\n    <p>My paragraph.</p>\n</body>\n</html>',
        },
        {
        description: 'Add a CSS style to change the background color of the header.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge</title>\n    <style>\n        h1 { background-color: yellow; }\n    </style>\n</head>\n<body>\n    <h1>Styled Header</h1>\n    <p>My paragraph.</p>\n</body>\n</html>',
        },
        {
        description: 'Center the text within a `<div>` both horizontally and vertically.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge 1</title>\n    <style>\n        /* Add your CSS here */\n    </style>\n</head>\n<body>\n    <div id="centered-text">\n        <p>This text should be centered.</p>\n    </div>\n</body>\n</html>',
        },
        {
        description: 'Create a responsive layout where a set of three boxes stacks vertically on smaller screens and arranges side-by-side on larger screens.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge 2</title>\n    <style>\n        /* Add your CSS here */\n    </style>\n</head>\n<body>\n    <div class="container">\n        <div class="box">Box 1</div>\n        <div class="box">Box 2</div>\n        <div class="box">Box 3</div>\n    </div>\n</body>\n</html>',
        },
        {
        description: 'Add an event listener to a button that changes the text of a `<p>` element when clicked.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge 3</title>\n    <style>\n        /* Add your CSS here */\n    </style>\n</head>\n<body>\n    <button id="change-text-btn">Change Text</button>\n    <p id="text">Original Text</p>\n\n    <script>\n        // Add your JavaScript here\n    </script>\n</body>\n</html>',
        },
        {
        description: 'Create a simple image gallery with three images arranged in a grid layout. Add hover effects to enlarge the images slightly when hovered over.',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Challenge 4</title>\n    <style>\n        /* Add your CSS here */\n    </style>\n</head>\n<body>\n    <div class="gallery">\n        <img src="https://via.placeholder.com/150" alt="Image 1">\n        <img src="https://via.placeholder.com/150" alt="Image 2">\n        <img src="https://via.placeholder.com/150" alt="Image 3">\n    </div>\n</body>\n</html>',
        },
    // Add more challenges here
    ];

    // Load the first challenge
    let currentChallenge = 0;
    function loadChallenge(index) {
        const challenge = challenges[index];
        document.getElementById('challenge').innerText = challenge.description;
        codeEditor.setValue(challenge.initialCode);
    }
    loadChallenge(currentChallenge);

    // Navigation button
    document.getElementById('next-btn').addEventListener('click', () => {
        currentChallenge++;
        if (currentChallenge < challenges.length) {
            loadChallenge(currentChallenge);
        } else {
            document.getElementById('challenge').innerText = 'Congratulations! You have completed all challenges.';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize CodeMirror
    const codeEditor = CodeMirror(document.getElementById('code-editor'), {
        mode: 'htmlmixed',
        lineNumbers: true,
        theme: 'dracula',
    });

    // Load the first challenge
    let currentChallenge = 0;
    function loadChallenge(index) {
        const challenge = challenges[index];
        document.getElementById('challenge').innerText = challenge.description;
        codeEditor.setValue(challenge.initialCode);
    }
    loadChallenge(currentChallenge);

    // Update preview on code change
    codeEditor.on('change', () => {
        const code = codeEditor.getValue();
        const preview = document.getElementById('preview');
        preview.srcdoc = code;
    });
});


// Example validation function
function validateSolution(code) {
    // Basic validation for demonstration
    if (code.includes('<h1>My Header</h1>') && code.includes('<p>My paragraph.</p>')) {
        return true;
    }
    return false;
}

// Update feedback based on validation
codeEditor.on('change', () => {
    const code = codeEditor.getValue();
    const preview = document.getElementById('preview');
    preview.srcdoc = code;

    // Feedback
    const feedback = document.getElementById('hints');
    if (validateSolution(code)) {
        feedback.innerText = 'Correct! Well done.';
    } else {
        feedback.innerText = 'Keep trying!';
    }
});


// Example navigation
function nextChallenge() {
    currentChallenge++;
    if (currentChallenge < challenges.length) {
        loadChallenge(currentChallenge);
    } else {
        document.getElementById('challenge').innerText = 'Congratulations! You have completed all challenges.';
    }
}

// Add event listeners for navigation
document.getElementById('next-btn').addEventListener('click', nextChallenge);
