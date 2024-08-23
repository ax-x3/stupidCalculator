var stage = 0;
var firstNumber = NaN;
var operator = 0;
var secondNumber = NaN;
var result = NaN;
var response = "n";


const initialLoadingDialogue = [
    "Contacting server...<br>",
    "Synchronyzing TCP protocol...<br>",
    "Establishing secure connection with server...<br>",
    "Recieving data...<br>",
    "Loading assets...<br>",
    "Preparing...<br>",
    "Done!<br><br>Welcome to stupidCalculator!<br>For more projects, visit <a style='color: #f6f' href='https://amethystx.pages.dev/'>my website</a>.<br>Enter the first number:&nbsp;"
]

const finalLoadingDialogue = [
    "Reconnecting to server (session timed out)...<br>",
    "Contacting server...<br>",
    "Synchronyzing transmission control protocol...<br>",
    "Establishing secure connection with server...<br>",
    "Recieving data...<br>",
    "Loading assets...<br>",
    "Preparing...<br>",
    "Reading bytes...<br>",
    "Compressing data...<br>",
    "Preparing to send...<br>",
    "Awaiting server acknowledgement...<br>",
    "Server is busy, still waiting...<br>",
    "Server unresponsive, preparing Plan B...<br>",
    "Processing inputs...<br>",
    "Detecting device capabilities...<br>",
    "Allocating required memory...<br>",
    "Scheduling process time...<br>",
    "Loading shaders...<br>",
    "Rendering nearby chunks...<br>",
    "Optimizing calculation algorithm...<br>",
    "Seeding random number generator...<br>",
    "Synchronizing...<br>",
    "Desynchronizing...<br>",
    "Predicting code complexity...<br>",
    "Forgot Big O notation, rewatching lecture...<br>",
    "Querying databases...<br>",
    "Detecting edge cases...<br>",
    "No edge cases detected, continuing...<br>",
    "Detecting recursion...<br>",
    "Recursion detected, resolving recursion...<br>",
    "Preprocessing for anomaly detection...<br>",
    "Setting up parallel processing for quantum computation...<br>",
    "Optimzing multithreading algorithm...<br>",
    "Tuning neural network...<br>",
    "Analysizing time series...<br>",
    "Generating semantic analysis...<br>",
    "Decrypting cryptographs...<br>",
    "Enabling indexing for parallel databases...<br>",
    "Compensating for hardware-induced spacetime distortions...<br>",
    "Adjusting quantum flux parameters...<br>",
    "Balancing computational load...<br>",
    "Performing heuristic analysis for algorithmic refinement...<br>",
    "Collecting garbage...<br>",
    "Allocating resources...<br>",
    "Reducing latency in distrubuted computing...<br>",
    "Verifying quantum-state coherence...<br>",
    "Caching data retrieval...<br>",
    "Cross-validating machine learning models...<br>",
    "Rotating encryption key for enhanced security...<br>",
    "Debugging reality leaks...<br>",
    "Polishing trophies...<br>",
    "Animating nanobot swarms...<br>",
    "Accelerating cognitive cycles...<br>",
    "Channeling computational ether...<br>",
    "Setting up firewalls...<br>",
    "Calibrating probability manifolds...<br>",
    "Optimizing hyperparameters...<br>",
    "Recalibrating on-device sensors...<br>",
    "Engaging quantum tunneling arrays...<br>",
    "Performing spectral analysis for signal processing...<br>",
    "Training neural networks with gradient descent...<br>",
    "Optimizing file system fragmentation...<br>",
    "Correcting quantum error in qubit operations...<br>",
    "Automatically testing for code integrity...<br>",
    "Sharding database for inproved scalability...<br>",
    "Selecting energy-efficient algorithm...<br>",
    "Factorizing matrix for data dimensionality reduction...<br>",
    "Evolving genetic algorithm...<br>",
    "Balancing load in distributed cloud environments...<br>",
    "Enhancing entropy-based randomness...<br>",
    "Teaching adaptive learning to machine learning models...<br>",
    "Prioritizing threads...<br>",
    "Continuously integrating for codebase validation...<br>",
    "Brewing coffee...<br>",
    "Regocnizing patterns for image processing...<br>",
    "Generating terrain...<br>",
    "Performing cluster  analysis for data segmentation...<br>",
    "Optimizing quantum gate synthesis...<br>",
    "Predicting caching for proactive data retrieval...<br>",
    "Kernel parameter tuning for system performance...<br>",
    "Deciding dynamic spectrum allocation in wireless network...<br>",
    "Markov chain modeling for predictive analytics...<br>",
    "Testing cross-platform compatability...<br>",
    "Validating quantum teleportation protocol...<br>",
    "Deduplicating data for storage efficiency...<br>",
    "Reduplicating data for storage inefficiency...<br>",
    "Inferencing bayesian for uncertainty quantification...<br>",
    "Routing network packet delivery...<br>",
    "Evolving swarm intelligence algorithms...<br>",
    "Refining meshes in simulations...<br>",
    "Reinforcement learning for autonomous decision-making...<br>",
    "Performing quantum state tomography for accuracy verification...<br>",
    "Identifying statistical outliers in datasets...<br>",
    "Enabling fuzzy logic control for dynamic system behavior...<br>",
    "Parallelizing GPU for accelerated processing...<br>",
    "Implementing zero-knowledge proof for enhanced data privacy...<br>",
    "Enforcing differential privacy in data processing...<br>",
    "Taking a (very) quick break...<br>",
    "Synchronizing system clock for temporal consistency...<br>",
    "Optimizing substructure identification...<br>",
    "Hashing for data integrity...<br>",
    "Applying adaptive noise filtering...<br>",
    "Quantum annealing for combinatorial optimization...<br>",
    "Applying game theory in decision strategies...<br>",
    "Hacking government databases...<br>",
    "Entering mainframe...<br>",
    "Concealing virtual address...<br>",
    "Dowloading confidential data...<br>",
    "Escaping unnoticed...<br>",
    "Preparing output rendering pipeline...<br>",
    "Baking textures...<br>",
    "Applying selected algorithms...<br>",
    "Processing result...<br>",
    "Converting output data structure...<br>",
    "Generating output phrase...<br>",
    "Preparing to display result...<br>",
    "Taking a deep breath...<br>",
    "Creating newline character...<br>",
    "Printing result...<br>",
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function begin() {
    stage = 0;
    pretendToLoad(initialLoadingDialogue);
}

async function pretendToLoad(dialogue) {

    for (let i = 0; i < dialogue.length; i++) {
        // await sleep(1);
        await sleep(10 + (500 / (0.5 + 2 ** (-24 * (Math.random() - 0.5)))));
        show(dialogue[i]);
    }
    stage += 1;
}

function show(text) {
    const history = document.getElementById("history");
    const terminal = document.getElementById("terminalInput");
    history.innerHTML += terminal.value.replace('<', '&lt;').replace('>', '&gt;') + text;
    terminal.value = "";
    let terminalx = window.scrollX + terminal.getBoundingClientRect().left;
    terminal.style = "width: calc(100vw - 16px - " + terminalx + "px);";
    window.scrollTo(0, document.body.scrollHeight);
} 

function enter() {
    const terminal = document.getElementById("terminalInput");
    if (stage == 0 || stage == 4) {
        show("You fool~");
    } else if (stage == 1) {
        firstNumber = terminal.value.replace('<', '&lt;').replace('>', '&gt;');
        if (isNaN(firstNumber) || firstNumber === "") {
            show("<br>That isn't a number.<br>Enter the first number:&nbsp;");
            return;
        } else {
            show("<br>Enter an operator (+, -, *, /):&nbsp;");
            stage += 1;
        }
    } else if (stage == 2) {
        operator = terminal.value.replace('<', '&lt;').replace('>', '&gt;');
        if (!['+', '-', '*', '/'].includes(operator)) {
            show("<br>That isn't a valid operator.<br>Enter an operator:&nbsp;");
            return;
        } else {
            show("<br>Enter the second number:&nbsp;");
            stage += 1;
        }
    } else if (stage == 3) {
        secondNumber = terminal.value.replace('<', '&lt;').replace('>', '&gt;');
        if (isNaN(secondNumber) || secondNumber === "") {
            show("<br>That isn't a number.<br>Enter the second number:&nbsp;");
            return;
        } else {
            show("<br><br>");
            stage += 1;
            if (operator == "+") {
                result = firstNumber + secondNumber;
            } else if (operator == "-") {
                result = firstNumber - secondNumber;
            } else if (operator == "*") {
                result = firstNumber * secondNumber;
            } else if (operator == "/") {
                result = firstNumber / secondNumber;
            }
            finalLoadingDialogue.push("Done!<br><br>Result:&nbsp;" + firstNumber + "&nbsp;" + operator + "&nbsp;" + secondNumber + "&nbsp;=&nbsp;" + result + "<br><br>Calculate another? (y/n):&nbsp;");
            pretendToLoad(finalLoadingDialogue);
        }
    } else if (stage == 5) {
        response = terminal.value.replace('<', '&lt;').replace('>', '&gt;');
        if (["y", "Y", "yes", "Yes", "yEs", "yeS", "YEs", "YeS", "yES", "YES"].includes(response)) {
            while (1 == 1) {
                response = "y";
            }
        } else if (["n", "N", "no", "No", "nO", "NO"].includes(response)) {
            show("<br>An error occurred while parsing your response. Please try again.<br>Calculate another? (y/n):&nbsp;");
            return;
        } else {
            show("<br>That isn't a valid response.<br>Calculate another? (y/n):&nbsp;");
            return;
        }
    } else {
        show("<br>");
    }

}

