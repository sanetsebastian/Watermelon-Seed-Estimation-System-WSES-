// ==========================================
// WSES - WATERMELON SEED ESTIMATION SYSTEM
// ==========================================

function scrollToCalculator() {
    document.getElementById("calculator").scrollIntoView({
        behavior: "smooth"
    });
}

function animateSeedCount(element, finalValue) {
    const start = 0;
    const duration = 1400;
    const startTime = performance.now();

    function tick(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.round(start + (finalValue - start) * eased);

        element.textContent = currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            element.textContent = finalValue.toLocaleString();
        }
    }

    requestAnimationFrame(tick);
}

function estimateSeeds() {
    const weight = parseFloat(document.getElementById("weight").value);
    const length = parseFloat(document.getElementById("length").value);
    const diameter = parseFloat(document.getElementById("diameter").value);

    if (
        isNaN(weight) ||
        isNaN(length) ||
        isNaN(diameter) ||
        weight <= 0 ||
        length <= 0 ||
        diameter <= 0
    ) {
        alert("🍉 Please enter valid watermelon measurements!");
        return;
    }

    const overlay = document.getElementById("calculationOverlay");
    const progress = document.getElementById("loadingProgress");
    const alertMessage = document.getElementById("alertMessage");
    const loadingText = document.getElementById("loadingText");

    if (!overlay || !progress || !alertMessage || !loadingText) {
        showResult(weight, length, diameter);
        return;
    }

    overlay.classList.add("active");
    document.body.classList.add("shake");

    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 400);

    const messages = [
        "WATERMELON ANALYSIS INITIATED 🍉",
        "WSES-3000 HAS AWAKENED 🤖",
        "SEEDY IS GETTING NERVOUS 🌱",
        "MELONIE HAS REQUESTED PRIVACY 🍉",
        "CALCULATING SEED CHAOS 🔬"
    ];

    let messageIndex = 0;
    alertMessage.textContent = messages[0];

    const messageTimer = setInterval(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
            alertMessage.textContent = messages[messageIndex];
        }
    }, 400);

    let currentProgress = 0;

    const loadingTimer = setInterval(() => {
        currentProgress += 5;
        progress.style.width = currentProgress + "%";

        if (currentProgress < 30) {
            loadingText.textContent = "Scanning watermelon surface... 🍉";
        } else if (currentProgress < 60) {
            loadingText.textContent = "Counting invisible seeds... 🌱";
        } else if (currentProgress < 90) {
            loadingText.textContent = "Questioning life choices... 🤖";
        } else {
            loadingText.textContent = "FINALISING COMPLETELY UNNECESSARY REPORT... 🔬";
        }

        if (currentProgress >= 100) {
            clearInterval(loadingTimer);
            clearInterval(messageTimer);

            const estimatedSeeds = Math.round(
                -386.139 +
                (92.320 * weight) +
                (9.255 * length) +
                (11.107 * diameter)
            );

            const seedDensity = (estimatedSeeds / weight).toFixed(1);

            let seedLevel;
            let funnyMessage;

            if (estimatedSeeds < 800) {
                seedLevel = "LOW SEED 🌱";
                funnyMessage = "Your watermelon is behaving suspiciously well. 🍉";
            } else if (estimatedSeeds < 1200) {
                seedLevel = "NORMAL 🍉";
                funnyMessage = "A respectable amount of seeds. Science approves. 🧪";
            } else if (estimatedSeeds < 1600) {
                seedLevel = "SEED MONSTER 👹";
                funnyMessage = "WARNING: This watermelon may contain more seeds than expected.";
            } else {
                seedLevel = "SEED CHAOS 💀";
                funnyMessage = "RUN. THERE ARE SEEDS EVERYWHERE. 🍉💀";
            }

            const seedCountElement = document.getElementById("seedCount");
            const seedDensityElement = document.getElementById("seedDensity");
            const seedLevelElement = document.getElementById("seedLevel");
            const funnyMessageElement = document.getElementById("funnyMessage");
            const modelInfoElement = document.querySelector(".model-info");

            seedCountElement.textContent = "0";
            seedDensityElement.textContent = seedDensity + " seeds/kg";
            seedLevelElement.textContent = seedLevel;
            funnyMessageElement.textContent = funnyMessage;

            if (modelInfoElement) {
                modelInfoElement.textContent = "🧠 Model: Linear Regression • Prediction based on watermelon measurements";
            }

            animateSeedCount(seedCountElement, estimatedSeeds);

            setTimeout(() => {
                overlay.classList.remove("active");
                progress.style.width = "0%";

                const result = document.getElementById("result");
                result.style.display = "block";
                result.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 1200);
        }
    }, 100);
}

function showResult(weight, length, diameter) {
    const estimatedSeeds = Math.round(
        (weight * 150) +
        (length * 10) +
        (diameter * 5)
    );

    const seedDensity = (estimatedSeeds / weight).toFixed(1);

    let seedLevel;
    let funnyMessage;

    if (estimatedSeeds < 800) {
        seedLevel = "LOW SEED 🌱";
        funnyMessage = "Your watermelon is behaving suspiciously well. 🍉";
    } else if (estimatedSeeds < 1200) {
        seedLevel = "NORMAL 🍉";
        funnyMessage = "A respectable amount of seeds. Science approves. 🧪";
    } else if (estimatedSeeds < 1600) {
        seedLevel = "SEED MONSTER 👹";
        funnyMessage = "WARNING: This watermelon may contain more seeds than expected.";
    } else {
        seedLevel = "SEED CHAOS 💀";
        funnyMessage = "RUN. THERE ARE SEEDS EVERYWHERE. 🍉💀";
    }

    const seedCountElement = document.getElementById("seedCount");
    const seedDensityElement = document.getElementById("seedDensity");
    const seedLevelElement = document.getElementById("seedLevel");
    const funnyMessageElement = document.getElementById("funnyMessage");

    seedCountElement.textContent = "0";
    seedDensityElement.textContent = seedDensity + " seeds/kg";
    seedLevelElement.textContent = seedLevel;
    funnyMessageElement.textContent = funnyMessage;
    animateSeedCount(seedCountElement, estimatedSeeds);

    const result = document.getElementById("result");
    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth", block: "center" });
}
