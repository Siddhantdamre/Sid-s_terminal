document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-input");
    const promptSpan = document.querySelector(".prompt");

    const commandHistory = [];
    let historyIndex = -1;

    let currentUser = "Siddhant";
    let currentContext = "portfolio";

    const mooArt = `
      ____  _   _ _____ ____ ____  _  __
     |  _ \\| | | | ____/ ___/ ___|| |/ /
     | | | | | | |  _| \\___ \\___ \\| ' / 
     | |_| | |_| | |___ ___) |___) | . \\ 
     |____/ \\___/|_____|____/____/|_|\\_\\
                                              
    Siddhant Damre
    Full Stack Developer and competitive programmer
    `;

    const asciiPicture = `
      .-''''-.
     /        \\
    |          |
    |  .--.  .-|
    | (    )(  )
    |  '--'  '--'
     \\        /
      '-.__.-'
    `;

    const updatePrompt = () => {
        promptSpan.textContent = `${currentUser}@${currentContext}:~$`;
    };

    const commands = {
        start: () => {
            currentContext = "home";
            updatePrompt();
            return mooArt + "\n" + asciiPicture + "\nType 'list' to see available commands.";
        },
        showAbout: () => {
            currentContext = "about";
            updatePrompt();
            return `
About Me
Who am I?
I am a Full Stack Developer. Currently pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology, I have a strong foundation in engineering principles and a deep curiosity for emerging technologies. I am a quick learner, actively seeking opportunities to grow through real-world applications and innovative challenges. From web development to quantum computing, I thrive on building impactful solutions that blend creativity with code.

What are my skills?
I have hands-on experience with a wide range of programming languages and technologies, including Python, Java, C++, JavaScript, HTML, CSS, React, Next.js, Angular, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, Firebase, and Git. I’m also proficient in developing RESTful APIs, working with WebSockets, and integrating secure authentication systems. I’ve built applications involving real-time chat, stock analysis dashboards, technical indicators, and encrypted communication systems. I’m always looking to deepen my skills and apply them creatively to solve real-world problems through innovative and scalable solutions.

What are my goals?
My goal is to continue to learn and grow as a developer and to work on projects that challenge me and allow me to use my skills to make a positive impact on the world. I am always looking for new opportunities to learn and grow and I am excited to see where my career takes me.

What are my strengths?
My strengths include my ability to learn quickly, my attention to detail, my problem-solving skills, and my ability to work well with others. I am always looking for new ways to improve my skills and I am excited to see where my career takes me.

What are my accomplishments?
Some of my accomplishments include winning hackathons, completing projects, and receiving awards for my work. I am always looking for new ways to challenge myself and I am excited to see where my career takes me.

That’s the gist of who I am—part code wizard, part snack enthusiast, and full-time internet explorer (not the browser, though). If you’re still reading this, congrats—you’ve unlocked the secret level of my life story! Do check out my previous works and resume to see what I’ve been up to. Now, let’s connect and create something amazing… or at least trade bad tech jokes. Your call!
`;
        },

        viewProjects: () => {
            currentContext = "projects";
            updatePrompt();
            const combinedProjectsContent = `
Projects
--------
Some of my top projects are listed below.....

    1.  Mental Health Support Platform
Description: A mental well-being platform featuring mood tracking, and mental health resources.
Technologies: MEAN Stack
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Mental health</a><br>
    2.  Stock Market Dashboard
Description: A full-featured stock analysis tool with technical indicators (MACD, Aroon, Supertrend, RSI), buy/sell signals, profit/loss, risk management, and historical charts for NIFTY 100.
Technologies: Streamlit, yFinance, pandas-ta, Plotly, Flask (in future), React (frontend plan)
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Stock market dashboard</a><br>
    3.  Tax Invoice Software
Description: A PHP & MySQL-powered invoice management system with login, client management, and company details modules.
Technologies: PHP, MySQL, HTML, CSS
    4.  Encrypted Chat Application
Description: A secure chat application using Django Channels, AES encryption, FrodoKEM, and XMSS for quantum-resistant communication.
Technologies: Django, WebSockets, Python, Cryptography
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Encrypted chat application</a><br>
    5.  Bio Pellet Plant Locator
Description: A MERN stack web app to locate bio pellet plants using pincode search, integrated with PayPal payments and map services.
Technologies: MongoDB, Express.js, React.js, Node.js
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">plant locator</a><br>
    6.  Flash Card Generator
Description: A study tool to generate customizable flashcards for quick revision and spaced repetition learning.
Technologies: MongoDB, Express.js, React.js, Node.js
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Flash Card Generator</a><br>
    7.  Air Quality Management System (IoT)
Description: An IoT-based model to monitor air pollution with real-time data and alert systems for hazardous environments.
Technologies: IoT Sensors, Python, Embedded Systems
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Air Quality Management</a><br>
    8.  Background Remover Tool
Description: A web tool to remove image backgrounds using ML/CV techniques, wrapped in a clean MERN stack interface.
Technologies: MongoDB, Express.js, React.js, Node.js
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Background remover</a><br>
    9. Net.AI – Network Security & Performance Optimization<br>
Description: A real-time intelligent system that analyzes network traffic using machine learning to detect anomalies, potential threats, and optimize overall network performance.<br>
Technologies: Python, Machine Learning, Network Security, Data Analysis<br>
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Net.AI</a><br><br>
    10. LunarLand – Deep Reinforcement Learning Agent<br>
Description: An AI agent built using deep reinforcement learning to autonomously land a spacecraft in a simulated lunar environment, improving landing accuracy through reward-based learning.<br>
Technologies: Python, TensorFlow, Reinforcement Learning, OpenAI Gym<br>
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">LunarLand</a><br><br>
    11. Water.DRIE – Predictive Water Level Analysis<br>
Description: A time-series forecasting system that predicts water body levels and drought conditions, providing real-time monitoring and data-driven insights through visual dashboards.<br>
Technologies: Python, Machine Learning, Time Series Analysis, Data Visualization<br>
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">Water.DRIE</a><br><br>
    12. BioPellet Plant Website<br>
Description: A full-stack web application developed for a bio-pellet manufacturing plant, featuring responsive design, smooth content integration, and scalable architecture.<br>
Technologies: React.js, Node.js, JavaScript, HTML, CSS<br>
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">BioPellet Plant Website</a><br><br>`;
            return Promise.resolve(combinedProjectsContent);
        },

        project: () => {
            return commands.viewProjects();
        },

        getResume: () => {
            currentContext = "resume";
            updatePrompt();
            const resumeContent = `
Resume:
-------
<a href="Resume1.pdf" target="_blank" style="color:#00ff00; text-decoration: underline;">View my resume here</a>
`;
            return Promise.resolve(resumeContent);
        },
        contactMe: () => {
            currentContext = "contact";
            updatePrompt();
            return `
Contact Me:
-----------
LinkedIn: <a href="https://www.linkedin.com/in/siddhant-damre-4327b7371" target="_blank" style="color:#00ff00; text-decoration: underline;">https://www.linkedin.com/in/siddhant-damre-4327b7371</a><br>
GitHub: <a href="https://github.com/Siddhantdamre" target="_blank" style="color:#00ff00; text-decoration: underline;">https://github.com/Siddhantdamre</a><br>
Instagram: <a href="https://www.instagram.com/siddh_antdamre/" target="_blank" style="color:#00ff00; text-decoration: underline;">https://www.instagram.com/siddh_antdamre</a><br>
Email: <a href="mailto:siddhantdamre11@gmail.com" target="_blank" style="color:#00ff00; text-decoration: underline;">siddhantdamre11@gmail.com</a><br>
`;
        },
        clearConsole: () => {
            output.innerHTML = '';
            currentContext = "portfolio";
            updatePrompt();
            return '';
        },
        showTime: () => {
            return new Date().toString();
        },
        getSkills: () => {
            currentContext = "skills";
            updatePrompt();
            const skillsContent = `
Skills:
-------
- Programming Languages: Python, C, C++, Java, JavaScript
- Web Development: MERN stack, MEAN stack, Django
- Tools & Platforms: GitHub, Terminal UI
- Operating Systems: Windows, Linux
- Databases: MySQL, MongoDB, Firebase
- Cloud Platforms: AWS, Google Cloud
- Multimedia: Adobe Photoshop, After Effects, Fl Studio
`;
            return Promise.resolve(skillsContent);
        },
        terminateSession: () => {
            currentContext = "exit";
            updatePrompt();
            return 'Are you sure you want to exit? (y/n)';
        },
        list: () => {
            currentContext = "commands";
            updatePrompt();
            return `
Available Commands:
-------------------
start           - Initialize the portfolio interface
showAbout       - Learn more about me
getResume       - View my resume
viewProjects    - View a list of all my projects
getSkills       - Display my technical skills
clearConsole    - Clear the terminal output
contactMe       - Get in touch with me
showTime        - Display current date and time
whoAmI          - Display user identity information
list            - Show this list of available commands
terminateSession - Exit the terminal
`;
        },
        whoAmI: () => {
            return "Portfolio@viewer";
        }
    };

    updatePrompt();

    window.addEventListener("touchstart", () => {
        input.focus();
    });

    let exitConfirmation = false;
    let isTyping = false;
    let stopTyping = false;

    async function typeText(html, callback) {
        if (isTyping) return;
        isTyping = true;
        stopTyping = false;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html.replace(/\n/g, '<br>');
        const nodes = Array.from(tempDiv.childNodes);

        for (let node of nodes) {
            if (stopTyping) break;

            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                let span = document.createElement('span');
                output.appendChild(span);
                for (let char of text) {
                    if (stopTyping) break;
                    span.textContent += char;
                    await new Promise(r => setTimeout(r, 10));
                }

                output.scrollTo({ top: output.scrollHeight, behavior: 'smooth' });

            } else {
                output.appendChild(node.cloneNode(true));

                output.scrollTo({ top: output.scrollHeight, behavior: 'smooth' });
            }
        }

        isTyping = false;
        if (callback && !stopTyping) callback();
    }

    output.addEventListener("click", (event) => {
        const anchor = event.target.closest('a');
        if (anchor && anchor.href) {
            event.preventDefault();
            window.open(anchor.href, '_blank');
        }
    });

    const processCommand = (input) => {
        if (exitConfirmation) {
            if (input.toLowerCase() === 'y') {
                output.innerHTML = 'Thank you for visiting my Portfolio Website.\n~Siddhant Damre\nSession terminated. Please reload to interact but you may lose your progress.';
                input.style.display = 'none';
                return '';
            } else if (input.toLowerCase() === 'n') {
                exitConfirmation = false;
                currentContext = "portfolio";
                updatePrompt();
                return 'Exit cancelled. You may continue.';
            } else {
                return 'Please enter y or n.';
            }
        }

        const parts = input.split(' ');
        const command = parts[0];
        const args = parts.slice(1);

        if (command === 'terminateSession') {
            exitConfirmation = true;
            return commands.terminateSession();
        }

        if (commands[command]) {
            return commands[command](args);
        } else {
            return `Command not found: ${command}\nType "list" for a list of available commands.`;
        }
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = input.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }
            output.innerHTML += `${currentUser}@${currentContext}:~$ ${command}\n`;
            input.value = "";
            input.disabled = true;
            const response = processCommand(command);
            if (response instanceof Promise) {
                response.then(res => typeText(res + "\n", () => {
                    input.disabled = false;
                    input.focus();
                }));
            } else {
                typeText(response + "\n", () => {
                    input.disabled = false;
                    input.focus();
                });
            }
        } else if (e.key === "ArrowUp") {
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === "ArrowDown") {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "c" && e.ctrlKey) {
            if (isTyping) {
                stopTyping = true;
                output.innerHTML += '^C\n';
                input.disabled = false;
                input.value = '';
                input.focus();
                e.preventDefault();
            }
        }
    });

    function openLink(event, url) {
        event.preventDefault();
        if (url.startsWith('mailto:')) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }

    typeText("Welcome to Siddhant's Terminal Portfolio!\nType 'list' to get started.\n");
});
