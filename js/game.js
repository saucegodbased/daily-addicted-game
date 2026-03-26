(function() {
    'use strict';

    // ========== WORD LIST ==========
    var WORDS = [
        'about','above','abuse','acted','added','admit','adopt','adult','after','again',
        'agent','agree','ahead','alarm','album','alert','alike','alive','allow','alone',
        'along','alter','among','angel','anger','angle','angry','apart','apple','apply',
        'arena','arise','aside','asset','avoid','award','aware','badge','basic','basis',
        'beach','begun','being','below','bench','black','blade','blame','bland','blank',
        'blast','blaze','bleed','blend','bless','blind','blink','block','blood','bloom',
        'blown','board','boost','bound','brain','brand','brave','bread','break','breed',
        'brick','bride','brief','bring','broad','broke','brook','brown','brush','build',
        'built','bunch','burst','buyer','cabin','cable','camel','candy','cargo','carry',
        'catch','cause','cedar','chain','chair','chalk','champ','charm','chase','cheap',
        'check','cheek','cheer','chess','chest','chief','child','china','chunk','civic',
        'civil','claim','clash','clean','clear','clerk','cliff','climb','cling','clock',
        'clone','close','cloth','cloud','coach','coast','color','comet','coral','count',
        'court','cover','crack','craft','crane','crash','crazy','cream','crime','crisp',
        'cross','crowd','crown','crush','cubic','curve','cycle','daily','dance','dealt',
        'debut','delay','delta','dense','depth','derby','devil','diary','dirty','disco',
        'donor','doubt','draft','drain','drake','drama','drank','drawn','dream','dress',
        'dried','drift','drill','drink','drive','drove','drown','dying','eager','eagle',
        'early','earth','eight','elder','elect','elite','empty','enemy','enjoy','enter',
        'equal','error','event','every','exact','exile','extra','faint','faith','fancy',
        'fatal','fault','feast','fiber','field','fifth','fifty','fight','final','first',
        'fixed','flame','flash','fleet','flesh','float','flood','floor','flora','flour',
        'fluid','flush','focal','focus','force','forge','forth','forum','found','frame',
        'frank','fraud','fresh','front','frost','fruit','fully','given','glass','gleam',
        'globe','gloom','glory','glove','going','grace','grade','grain','grand','grant',
        'graph','grasp','grass','grave','great','green','greet','grief','grind','gross',
        'group','grove','grown','guard','guess','guest','guide','guilt','habit','happy',
        'harsh','haven','heart','heavy','hedge','hence','horse','hotel','house','human',
        'humor','hurry','ideal','image','imply','index','inner','input','irony','ivory',
        'jewel','joint','judge','juice','knack','kneel','knife','knock','known','label',
        'labor','lance','large','laser','later','laugh','layer','learn','lease','least',
        'leave','legal','lemon','level','light','limit','linen','liver','local','lodge',
        'logic','loose','lover','lower','loyal','lunar','lunch','magic','major','maker',
        'manor','maple','march','match','mayor','medal','media','mercy','merit','metal',
        'meter','might','minor','minus','model','money','month','moral','motor','mount',
        'mouse','mouth','movie','music','naval','nerve','never','newly','night','noble',
        'noise','north','noted','novel','nurse','nylon','ocean','offer','often','olive',
        'onset','opera','orbit','order','other','outer','owner','oxide','paint','panel',
        'panic','paper','party','pasta','patch','pause','peace','pearl','penny','phase',
        'phone','photo','piano','piece','pilot','pinch','pitch','pixel','pizza','place',
        'plain','plane','plant','plate','plaza','plead','plumb','point','polar','pound',
        'power','press','price','pride','prime','print','prior','prize','probe','proof',
        'prose','proud','prove','psalm','pulse','punch','pupil','queen','quest','queue',
        'quick','quiet','quite','quota','quote','radar','radio','raise','rally','ranch',
        'range','rapid','ratio','reach','ready','realm','rebel','refer','reign','relax',
        'rider','ridge','rifle','right','rigid','risky','rival','river','robin','robot',
        'rocky','roman','rough','round','route','royal','rugby','ruler','rural','sadly',
        'saint','sauce','scale','scare','scene','scent','scope','score','scout','sedan',
        'sense','serve','seven','shade','shall','shame','shape','share','shark','sharp',
        'sheer','sheet','shelf','shell','shift','shine','shirt','shock','shoot','short',
        'shout','shrug','sight','since','sixth','sixty','skill','skull','slash','slate',
        'sleep','slice','slide','slope','smart','smell','smile','smoke','snake','solar',
        'solid','solve','south','space','spare','spark','speak','speed','spend','spent',
        'spice','spill','spine','spite','split','spoke','spoon','sport','spray','stack',
        'staff','stage','stain','stake','stale','stall','stamp','stand','stark','start',
        'state','steal','steam','steel','steep','steer','stern','stick','stiff','still',
        'stock','stole','stone','stood','store','storm','story','stout','stove','strip',
        'stuck','study','stuff','style','sugar','suite','sunny','super','surge','swamp',
        'swear','sweat','sweep','sweet','swept','swift','swing','sword','swore','sworn',
        'table','taste','teach','teeth','tempo','tense','theft','theme','thick','thief',
        'thing','think','third','thorn','three','threw','throw','thumb','tidal','tight',
        'timer','tired','title','today','token','topic','total','touch','tough','tower',
        'toxic','trace','track','trade','trail','train','trait','trash','treat','trend',
        'trial','tribe','trick','tried','troop','truck','truly','trunk','trust','truth',
        'tuned','twist','ultra','uncle','under','union','unite','unity','until','upper',
        'upset','urban','usage','usual','valid','value','vault','verse','video','vigor',
        'vinyl','viral','virus','visit','vital','vivid','vocal','voice','voter','waste',
        'watch','water','weave','wedge','weigh','weird','wheat','wheel','where','which',
        'while','white','whole','woman','world','worry','worse','worst','worth','would',
        'wound','wrath','write','wrong','wrote','yacht','yield','young','youth','zebra'
    ];

    // ========== SEEDED RNG ==========
    function mulberry32(a) {
        return function() {
            a |= 0;
            a = a + 0x6D2B79F5 | 0;
            var t = Math.imul(a ^ a >>> 15, 1 | a);
            t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }

    function seededShuffle(arr, rng) {
        var result = arr.slice();
        for (var i = result.length - 1; i > 0; i--) {
            var j = Math.floor(rng() * (i + 1));
            var temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
        return result;
    }

    // Deterministic derangement for small arrays (2 or 3 elements)
    function derangeSmall(letters, rng) {
        var n = letters.length;
        if (n === 2) {
            return [letters[1], letters[0]];
        }
        if (n === 3) {
            // Two possible derangements of [a, b, c]: [b, c, a] and [c, a, b]
            if (rng() < 0.5) {
                return [letters[1], letters[2], letters[0]];
            } else {
                return [letters[2], letters[0], letters[1]];
            }
        }
        return letters.slice();
    }

    // ========== DATE UTILITIES ==========
    function getTodayUTC() {
        var now = new Date();
        return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
    }

    function getDateSeed() {
        var d = getTodayUTC();
        return d.getUTCFullYear() * 10000 + (d.getUTCMonth() + 1) * 100 + d.getUTCDate();
    }

    function getDateString() {
        return getTodayUTC().toISOString().split('T')[0];
    }

    function getPuzzleNumber() {
        var launch = Date.UTC(2026, 2, 26); // March 26, 2026
        var today = getTodayUTC().getTime();
        return Math.floor((today - launch) / 86400000) + 1;
    }

    function getTimeToMidnightUTC() {
        var now = new Date();
        var tomorrow = new Date(Date.UTC(
            now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1
        ));
        return tomorrow.getTime() - now.getTime();
    }

    // ========== PUZZLE GENERATION ==========
    function selectWords(rng) {
        var indices = [];
        for (var i = 0; i < WORDS.length; i++) {
            indices.push(i);
        }
        var shuffled = seededShuffle(indices, rng);
        var selected = [];

        for (var s = 0; s < shuffled.length && selected.length < 4; s++) {
            var word = WORDS[shuffled[s]].toUpperCase();
            var valid = true;
            for (var col = 0; col < 5; col++) {
                for (var e = 0; e < selected.length; e++) {
                    if (selected[e].charAt(col) === word.charAt(col)) {
                        valid = false;
                        break;
                    }
                }
                if (!valid) break;
            }
            if (valid) {
                selected.push(word);
            }
        }

        return selected;
    }

    function generatePuzzle(seed) {
        var rng = mulberry32(seed);
        var words = selectWords(rng);

        // Create solution grid
        var solution = [];
        for (var w = 0; w < 4; w++) {
            solution.push(words[w].split(''));
        }

        // Create shuffled grid
        var grid = [];
        for (var g = 0; g < 4; g++) {
            grid.push(solution[g].slice());
        }

        var fixed = [];
        for (var f = 0; f < 4; f++) {
            fixed.push([false, false, false, false, false]);
        }

        var par = 0;

        for (var col = 0; col < 5; col++) {
            // Decide how many cells to fix: 1 or 2
            var fixCount = rng() < 0.4 ? 2 : 1;

            // Pick which rows are fixed
            var rowOrder = seededShuffle([0, 1, 2, 3], rng);
            for (var fc = 0; fc < fixCount; fc++) {
                fixed[rowOrder[fc]][col] = true;
            }

            // Get unfixed rows
            var unfixedRows = [];
            for (var r = 0; r < 4; r++) {
                if (!fixed[r][col]) {
                    unfixedRows.push(r);
                }
            }

            // Derange unfixed letters
            if (unfixedRows.length >= 2) {
                var originalLetters = [];
                for (var u = 0; u < unfixedRows.length; u++) {
                    originalLetters.push(solution[unfixedRows[u]][col]);
                }
                var deranged = derangeSmall(originalLetters, rng);
                for (var d = 0; d < unfixedRows.length; d++) {
                    grid[unfixedRows[d]][col] = deranged[d];
                }
                par += unfixedRows.length - 1;
            }
        }

        return {
            solution: solution,
            grid: grid,
            fixed: fixed,
            words: words,
            par: par
        };
    }

    // ========== GAME STATE ==========
    var STORAGE_KEY = 'daily-addicted-state';
    var VISITED_KEY = 'daily-addicted-visited';

    var state = {
        date: null,
        grid: null,
        solution: null,
        fixed: null,
        words: null,
        par: 0,
        swaps: 0,
        selected: null,
        completed: false,
        rowsComplete: [false, false, false, false],
        initialGrid: null
    };

    function saveState() {
        try {
            var toSave = {
                date: state.date,
                grid: state.grid,
                swaps: state.swaps,
                completed: state.completed,
                rowsComplete: state.rowsComplete,
                initialGrid: state.initialGrid
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
        } catch (e) {
            // localStorage might be full or disabled
        }
    }

    function loadState() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            var saved = JSON.parse(raw);
            if (saved && saved.date === getDateString()) {
                return saved;
            }
        } catch (e) {}
        return null;
    }

    // ========== UI RENDERING ==========
    function render() {
        renderGrid();
        renderSwapCounter();
        renderPuzzleNumber();
    }

    function renderGrid() {
        var container = document.getElementById('grid-container');
        container.innerHTML = '';

        for (var row = 0; row < 4; row++) {
            var rowEl = document.createElement('div');
            rowEl.className = 'grid-row';
            if (state.rowsComplete[row]) {
                rowEl.classList.add('row-complete');
            }

            for (var col = 0; col < 5; col++) {
                var cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.textContent = state.grid[row][col];
                cell.setAttribute('data-row', row);
                cell.setAttribute('data-col', col);

                if (state.fixed[row][col]) {
                    cell.classList.add('fixed');
                }
                if (state.rowsComplete[row]) {
                    cell.classList.add('complete');
                }
                if (state.selected && state.selected.row === row && state.selected.col === col) {
                    cell.classList.add('selected');
                }

                // Highlight valid swap targets
                if (state.selected && !state.completed &&
                    !state.rowsComplete[row] && !state.fixed[row][col] &&
                    state.selected.col === col &&
                    !(state.selected.row === row && state.selected.col === col)) {
                    cell.classList.add('swap-target');
                }

                if (!state.completed && !state.rowsComplete[row] && !state.fixed[row][col]) {
                    cell.classList.add('clickable');
                    cell.addEventListener('click', createCellHandler(row, col));
                }

                rowEl.appendChild(cell);
            }
            container.appendChild(rowEl);
        }
    }

    function createCellHandler(row, col) {
        return function() {
            handleCellClick(row, col);
        };
    }

    function renderSwapCounter() {
        document.getElementById('swap-counter').textContent =
            'Swaps: ' + state.swaps + ' | Par: ' + state.par;
    }

    function renderPuzzleNumber() {
        document.getElementById('puzzle-number').textContent = '#' + getPuzzleNumber();
    }

    function showMessage(text) {
        var bar = document.getElementById('message-bar');
        bar.textContent = text;
        bar.classList.remove('hidden');
        setTimeout(function() {
            bar.classList.add('hidden');
        }, 2000);
    }

    // ========== EVENT HANDLERS ==========
    function handleCellClick(row, col) {
        if (state.completed) return;
        if (state.rowsComplete[row]) return;
        if (state.fixed[row][col]) return;

        if (!state.selected) {
            // First selection
            state.selected = { row: row, col: col };
            render();
        } else if (state.selected.row === row && state.selected.col === col) {
            // Deselect
            state.selected = null;
            render();
        } else if (state.selected.col === col) {
            // Same column - perform swap
            var r1 = state.selected.row;
            var c1 = state.selected.col;

            if (state.fixed[row][col] || state.rowsComplete[row] ||
                state.fixed[r1][c1] || state.rowsComplete[r1]) {
                state.selected = null;
                render();
                return;
            }

            // Swap
            var temp = state.grid[r1][c1];
            state.grid[r1][c1] = state.grid[row][col];
            state.grid[row][col] = temp;
            state.swaps++;
            state.selected = null;

            // Check rows
            checkRows();

            render();

            // Trigger swap animation on the two cells
            animateSwap(r1, c1);
            animateSwap(row, col);

            // Check completion
            var allComplete = true;
            for (var i = 0; i < 4; i++) {
                if (!state.rowsComplete[i]) {
                    allComplete = false;
                    break;
                }
            }

            if (allComplete) {
                state.completed = true;
                saveState();
                setTimeout(function() {
                    if (typeof window.launchConfetti === 'function') {
                        window.launchConfetti();
                    }
                    showCompletionModal();
                }, 600);
            } else {
                saveState();
            }
        } else {
            // Different column - show message and reselect
            showMessage('Swap within the same column!');
            state.selected = { row: row, col: col };
            render();
        }
    }

    function animateSwap(row, col) {
        var cells = document.querySelectorAll('.grid-cell');
        for (var i = 0; i < cells.length; i++) {
            if (parseInt(cells[i].getAttribute('data-row')) === row &&
                parseInt(cells[i].getAttribute('data-col')) === col) {
                cells[i].classList.add('swapping');
                (function(cell) {
                    setTimeout(function() {
                        cell.classList.remove('swapping');
                    }, 300);
                })(cells[i]);
                break;
            }
        }
    }

    function checkRows() {
        for (var row = 0; row < 4; row++) {
            if (state.rowsComplete[row]) continue;
            var match = true;
            for (var col = 0; col < 5; col++) {
                if (state.grid[row][col] !== state.solution[row][col]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                state.rowsComplete[row] = true;
            }
        }
    }

    // ========== MODALS ==========
    function showHelpModal() {
        document.getElementById('help-modal').classList.remove('hidden');
    }

    function hideHelpModal() {
        document.getElementById('help-modal').classList.add('hidden');
    }

    function hideCompleteModal() {
        document.getElementById('complete-modal').classList.add('hidden');
    }

    function showCompletionModal() {
        var modal = document.getElementById('complete-modal');

        // Show words
        var wordsEl = document.getElementById('result-words');
        var wordsHTML = '';
        for (var i = 0; i < state.words.length; i++) {
            wordsHTML += '<span class="result-word">' + state.words[i] + '</span>';
        }
        wordsEl.innerHTML = wordsHTML;

        // Show stats
        var statsEl = document.getElementById('result-stats');
        statsEl.innerHTML =
            '<div class="stat">' +
                '<span class="stat-value">' + state.swaps + '</span>' +
                '<span class="stat-label">Swaps</span>' +
            '</div>' +
            '<div class="stat">' +
                '<span class="stat-value">' + state.par + '</span>' +
                '<span class="stat-label">Par</span>' +
            '</div>';

        // Show share preview
        var shareEl = document.getElementById('share-preview');
        shareEl.textContent = getShareText();

        // Start countdown
        startCountdown();

        modal.classList.remove('hidden');
    }

    function getShareText() {
        var puzzleNum = getPuzzleNumber();
        var lines = [];
        lines.push('\uD83E\uDDE9 Daily Addicted #' + puzzleNum);
        lines.push('');

        for (var row = 0; row < 4; row++) {
            var rowText = '';
            for (var col = 0; col < 5; col++) {
                if (state.fixed[row][col] ||
                    state.initialGrid[row][col] === state.solution[row][col]) {
                    rowText += '\uD83D\uDFE9'; // green square
                } else {
                    rowText += '\uD83D\uDFE7'; // orange square
                }
            }
            lines.push(rowText);
        }

        lines.push('');
        lines.push('Swaps: ' + state.swaps + ' (Par: ' + state.par + ')');
        return lines.join('\n');
    }

    var countdownInterval = null;

    function startCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        function update() {
            var ms = getTimeToMidnightUTC();
            var hours = Math.floor(ms / 3600000);
            var minutes = Math.floor((ms % 3600000) / 60000);
            var seconds = Math.floor((ms % 60000) / 1000);
            var el = document.getElementById('countdown');
            if (el) {
                el.textContent =
                    padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
            }
        }

        update();
        countdownInterval = setInterval(update, 1000);
    }

    function padZero(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    // ========== SHARING ==========
    function copyShareText() {
        var text = getShareText();

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopiedMessage();
            }, function() {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopiedMessage();
        } catch (e) {
            showMessage('Could not copy to clipboard');
        }
        document.body.removeChild(textarea);
    }

    function showCopiedMessage() {
        var msg = document.getElementById('copied-msg');
        msg.classList.remove('hidden');
        setTimeout(function() {
            msg.classList.add('hidden');
        }, 2500);
    }

    // ========== INITIALIZATION ==========
    function init() {
        var dateStr = getDateString();
        var seed = getDateSeed();
        var puzzle = generatePuzzle(seed);

        // Try to restore saved state
        var saved = loadState();

        if (saved) {
            state.date = saved.date;
            state.grid = saved.grid;
            state.swaps = saved.swaps;
            state.completed = saved.completed;
            state.rowsComplete = saved.rowsComplete;
            state.initialGrid = saved.initialGrid;
            state.solution = puzzle.solution;
            state.fixed = puzzle.fixed;
            state.words = puzzle.words;
            state.par = puzzle.par;
        } else {
            state.date = dateStr;
            state.grid = [];
            for (var i = 0; i < 4; i++) {
                state.grid.push(puzzle.grid[i].slice());
            }
            state.solution = puzzle.solution;
            state.fixed = puzzle.fixed;
            state.words = puzzle.words;
            state.par = puzzle.par;
            state.swaps = 0;
            state.completed = false;
            state.rowsComplete = [false, false, false, false];
            state.initialGrid = [];
            for (var j = 0; j < 4; j++) {
                state.initialGrid.push(puzzle.grid[j].slice());
            }

            // Check if any row is already complete (unlikely but possible)
            checkRows();
            saveState();
        }

        state.selected = null;

        // Set up event listeners
        document.getElementById('help-btn').addEventListener('click', showHelpModal);
        document.getElementById('help-close-btn').addEventListener('click', hideHelpModal);

        var helpCloseX = document.querySelector('#help-modal .modal-close');
        if (helpCloseX) {
            helpCloseX.addEventListener('click', hideHelpModal);
        }

        document.getElementById('share-btn').addEventListener('click', copyShareText);

        // Close modals on backdrop click
        var modals = document.querySelectorAll('.modal');
        for (var m = 0; m < modals.length; m++) {
            (function(modal) {
                var backdrop = modal.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.addEventListener('click', function() {
                        modal.classList.add('hidden');
                    });
                }
            })(modals[m]);
        }

        // Show help on first visit
        if (!localStorage.getItem(VISITED_KEY)) {
            localStorage.setItem(VISITED_KEY, 'true');
            setTimeout(showHelpModal, 400);
        }

        // Render
        render();

        // If already completed, show modal
        if (state.completed) {
            setTimeout(showCompletionModal, 400);
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
