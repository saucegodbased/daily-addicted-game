(function() {
    'use strict';

    // ========== WORD LISTS ==========
    var WORDS_4 = [
        'able','acid','aged','also','area','army','away','baby','back','ball',
        'band','bank','barn','base','bath','bear','beat','been','bell','belt',
        'bend','best','bill','bind','bird','bite','blow','blue','blur','boat',
        'body','bold','bolt','bomb','bond','bone','book','born','boss','both',
        'bowl','bulk','burn','busy','cafe','cage','cake','calm','came','camp',
        'cape','card','care','cart','case','cash','cast','cave','chip','city',
        'clad','clap','clay','clip','club','clue','coal','coat','code','coil',
        'coin','cold','come','cook','cool','cope','copy','cord','core','corn',
        'cost','coup','crew','crop','cure','curl','cute','dale','dame','damp',
        'dare','dark','dart','dash','data','dawn','dead','deaf','deal','dear',
        'debt','deck','deed','deem','deep','deer','demo','deny','desk','dial',
        'dice','diet','dirt','disc','dish','dock','does','dome','done','doom',
        'door','dose','down','drag','draw','drip','drop','drum','dual','duel',
        'duke','dull','dumb','dump','dune','dusk','dust','duty','each','earn',
        'ease','east','edge','else','emit','envy','epic','euro','even','evil',
        'exam','exit','face','fact','fade','fail','fair','fake','fall','fame',
        'fare','farm','fast','fate','fear','feat','feed','feel','file','fill',
        'film','find','fine','fire','firm','fish','fist','flag','flat','fled',
        'flew','flip','flog','flow','foam','fold','folk','fond','font','food',
        'fool','foot','ford','fore','fork','form','fort','foul','four','free',
        'from','fuel','full','fund','fury','fuse','gain','gale','game','gang',
        'gate','gave','gaze','gear','gene','gift','girl','give','glad','glow',
        'glue','goat','gold','golf','gone','good','grab','gram','gray','grew',
        'grid','grin','grip','grow','gulf','guru','gust','half','hall','halt',
        'hand','hang','hard','harm','hate','haul','have','head','heal','heap',
        'hear','heat','heel','held','help','herb','here','hero','hide','high',
        'hike','hill','hint','hire','hold','hole','holy','home','hook','hope',
        'horn','host','hour','huge','hull','hung','hunt','hurt','icon','idea',
        'inch','info','iron','isle','item','jack','jail','jazz','jean','jest',
        'joke','jump','june','jury','just','keen','keep','kept','kick','kind',
        'king','kiss','knit','knob','knot','lack','laid','lake','lamp','land',
        'lane','last','late','lawn','lead','leaf','lean','left','lend','lens',
        'lent','less','lied','life','lift','like','limb','lime','limp','line',
        'link','lion','list','live','load','loan','lock','loft','logo','lone',
        'long','look','lord','lose','loss','lost','loud','love','luck','lump',
        'lung','lure','lurk','made','mail','main','make','male','mall','malt',
        'mane','many','mark','mask','mass','mate','maze','meal','mean','meat',
        'meet','melt','memo','menu','mere','mesh','mess','mild','mile','milk',
        'mill','mind','mine','mint','miss','mist','mode','mold','mood','moon',
        'more','moss','most','move','much','must','myth','nail','name','navy',
        'near','neat','neck','need','nest','next','nice','nine','node','none',
        'norm','nose','note','noun','nude','obey','odds','okay','once','only',
        'onto','open','oral','ours','oval','oven','over','pace','pack','page',
        'paid','pain','pair','pale','palm','pane','park','part','pass','past',
        'path','peak','peer','pick','pier','pile','pine','pink','pipe','plan',
        'play','plea','plot','ploy','plug','plus','poem','poet','pole','poll',
        'pond','pool','poor','pope','pork','port','pose','post','pour','pray',
        'prop','pull','pump','pure','push','quit','race','rack','rage','raid',
        'rail','rain','rank','rare','rate','read','real','rear','reed','reef',
        'rein','rely','rent','rest','rice','rich','ride','rift','ring','rise',
        'risk','road','roam','rock','rode','role','roll','roof','room','root',
        'rope','rose','ruin','rule','rush','sack','safe','sage','said','sail',
        'sake','sale','salt','same','sand','sang','save','seal','seed','seek',
        'seem','seen','self','sell','send','sent','shed','ship','shop','shot',
        'show','shut','sick','side','sigh','sign','silk','sing','sink','site',
        'size','skin','skip','slam','slap','slim','slip','slot','slow','snap',
        'snow','soak','soar','sock','soft','soil','sold','sole','some','song',
        'soon','sort','soul','span','spin','spot','star','stay','stem','step',
        'stir','stop','such','suit','sure','swap','swim','tail','take','tale',
        'talk','tall','tank','tape','task','taxi','team','tear','tell','tend',
        'tent','term','test','text','that','them','then','they','thin','this',
        'tide','tidy','tied','tier','tile','till','time','tiny','tire','told',
        'toll','tomb','tone','took','tool','tops','tore','torn','tour','town',
        'trap','tray','tree','trim','trio','trip','true','tube','tuck','tune',
        'turn','twin','type','ugly','unit','upon','urge','used','user','vain',
        'vale','vary','vast','veil','vein','vent','verb','very','vest','veto',
        'view','vine','visa','void','volt','vote','wade','wage','wait','wake',
        'walk','wall','ward','warm','warn','wary','wash','wave','weak','wear',
        'weed','week','well','went','were','west','what','whom','wide','wife',
        'wild','will','wind','wine','wing','wire','wise','wish','with','woke',
        'wolf','wood','wool','word','wore','work','worm','worn','wrap','yard',
        'year','yell','zero','zone','zoom'
    ];

    var WORDS_5 = [
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

    var WORDS_6 = [
        'absorb','accept','access','across','acting','action','active','actual','adjust','admire',
        'affirm','afford','agency','agenda','agents','agreed','allies','almost','always','amount',
        'anchor','annual','answer','anyone','appear','archer','around','artist','aspect','assert',
        'assess','assign','assist','assume','assure','attach','attack','attend','autumn','avenue',
        'backed','badges','barely','barrel','basket','battle','beaten','beauty','became','become',
        'before','behalf','behave','behind','belong','beside','beyond','bishop','bitter','blanks',
        'blocks','boards','bonded','border','borrow','bottle','bottom','bounce','branch','breach',
        'bricks','bridge','bright','brings','broken','bronze','bubble','bucket','budget','buffer',
        'bundle','burden','bureau','butter','bypass','candle','canvas','carbon','carpet','castle',
        'caught','caused','center','chance','change','charge','charts','chosen','church','circle',
        'claims','clever','client','closed','closet','clouds','clutch','coffee','column','combat',
        'coming','commit','common','comply','convey','copied','copper','corner','costly','cotton',
        'couple','course','cousin','covers','create','credit','crisis','custom','damage','dancer',
        'danger','daring','dealer','debate','decade','decent','defend','define','degree','demand',
        'depend','depict','deploy','deputy','desert','design','desire','detail','detect','device',
        'devote','differ','digest','dinner','direct','divide','doctor','domain','donate','double',
        'dragon','driven','driver','during','earned','easily','eating','editor','effect','effort',
        'eighth','empire','employ','enable','ending','energy','engage','engine','enough','ensure',
        'entire','entity','equity','escape','estate','ethnic','evolve','exceed','except','excess',
        'excite','excuse','exempt','expand','expect','expert','export','expose','extend','extent',
        'fabric','facing','factor','fairly','fallen','family','farmer','father','faults','fellow',
        'female','figure','filing','filter','finals','finder','finger','finish','fiscal','flight',
        'flower','flying','folder','follow','forced','forest','forget','formal','format','formed',
        'former','foster','fought','fourth','freeze','friend','fringe','frozen','funded','fusion',
        'future','gained','garden','gather','gender','gentle','gifted','giving','global','govern',
        'grades','grants','guitar','handle','happen','hardly','harbor','hazard','heated','helped',
        'hidden','holder','honest','horror','humans','hunger','hunter','ignore','impact','import',
        'impose','income','indeed','indoor','inform','inject','injury','inmate','insect','insert',
        'inside','insist','intact','intend','intent','invest','inward','island','itself','jacket',
        'junior','killer','knight','launch','lawyer','laying','layout','leader','league','leaves',
        'lender','lesson','letter','lights','likely','linger','liquid','listen','little','lively',
        'living','lonely','losing','lovely','lumber','mainly','making','manage','manner','marble',
        'margin','marked','market','master','matter','medium','member','memory','mental','mentor',
        'merely','method','middle','mighty','miller','mining','minute','mirror','mobile','modern',
        'modify','moment','mortal','mostly','mother','motion','motive','murder','muscle','museum',
        'mutual','myself','namely','narrow','nation','nature','nearby','nearly','neatly','nickel',
        'nights','nobody','normal','notice','notion','number','object','obtain','occupy','offend',
        'office','online','openly','option','orange','orient','origin','outfit','outlet','output',
        'outset','oxford','oxygen','packed','palace','panels','parish','partly','patrol','patron',
        'peaked','pencil','people','period','permit','person','phrase','picked','pillar','pirate',
        'placed','planet','plates','player','please','pledge','plenty','pocket','poetry','points',
        'poison','police','policy','polish','polite','poorly','portal','poster','potato','potter',
        'pounds','powder','praise','prayer','prefer','priest','prince','prison','profit','prompt',
        'proper','proven','public','pumped','punish','purely','pursue','pushed','puzzle','racial',
        'radius','random','ranger','ranked','rarely','rather','rating','reader','really','reason',
        'rebels','recall','recent','record','reduce','reform','refuse','regard','regime','region',
        'regret','reject','relate','relief','remain','remedy','remote','rental','repair','repeat',
        'report','rescue','resign','resist','resort','result','retain','retire','return','reveal',
        'review','revolt','reward','rights','rising','ritual','robust','rolled','roster','rounds',
        'runner','sacred','safely','salary','sample','saving','scared','scenic','scheme','school',
        'screen','script','sealed','search','season','second','secret','sector','secure','seeing',
        'seemed','select','senior','series','server','settle','severe','shadow','shaped','shared',
        'sheets','shield','shorts','signal','silent','silver','simple','simply','singer','single',
        'slight','slowly','smooth','social','solely','solved','sought','source','speech','spirit',
        'spread','spring','square','stable','staged','stands','starts','status','steady','stolen',
        'stored','strain','strand','stream','street','stress','strict','strike','string','stripe',
        'stroke','strong','struck','studio','submit','subtle','suffer','summer','summit','superb',
        'supply','surely','survey','switch','symbol','tackle','talent','target','temple','tenant',
        'tender','terror','thanks','theory','thirty','though','thread','thrown','timber','tissue',
        'toward','travel','treaty','tribal','trophy','trying','tunnel','turned','twelve','twenty',
        'unfair','unions','unique','united','unlike','unlock','update','uphold','upward','urgent',
        'useful','valley','valued','varied','vendor','verbal','verify','victim','viewer','virgin',
        'vision','visual','volume','voting','waiter','wander','wanted','warmth','wealth','weapon',
        'weekly','weight','widely','window','winner','winter','wisdom','within','wonder','worker',
        'worlds','worthy','writer','yellow'
    ];

    // ========== DIFFICULTY CONFIG ==========
    var DIFFICULTY = {
        easy:   { rows: 3, cols: 4, words: WORDS_4, label: 'Easy',   seedOffset: 1 },
        medium: { rows: 4, cols: 5, words: WORDS_5, label: 'Medium', seedOffset: 0 },
        hard:   { rows: 5, cols: 6, words: WORDS_6, label: 'Hard',   seedOffset: 2 }
    };

    var currentDifficulty = 'medium';

    function getDifficultyConfig() {
        return DIFFICULTY[currentDifficulty];
    }

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

    function derangeSmall(letters, rng) {
        var n = letters.length;
        if (n === 2) {
            return [letters[1], letters[0]];
        }
        if (n === 3) {
            if (rng() < 0.5) {
                return [letters[1], letters[2], letters[0]];
            } else {
                return [letters[2], letters[0], letters[1]];
            }
        }
        if (n === 4) {
            var attempts = 0;
            while (attempts < 100) {
                var shuffled = seededShuffle(letters, rng);
                var isDerangement = true;
                for (var i = 0; i < n; i++) {
                    if (shuffled[i] === letters[i]) {
                        isDerangement = false;
                        break;
                    }
                }
                if (isDerangement) return shuffled;
                attempts++;
            }
            return [letters[1], letters[2], letters[3], letters[0]];
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
        var launch = Date.UTC(2026, 2, 26);
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
    function selectWords(rng, wordList, numRows, numCols) {
        var indices = [];
        for (var i = 0; i < wordList.length; i++) {
            indices.push(i);
        }
        var shuffled = seededShuffle(indices, rng);
        var selected = [];

        for (var s = 0; s < shuffled.length && selected.length < numRows; s++) {
            var word = wordList[shuffled[s]].toUpperCase();
            if (word.length !== numCols) continue;
            var valid = true;
            for (var col = 0; col < numCols; col++) {
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

    function generatePuzzle(seed, difficultyKey) {
        var config = DIFFICULTY[difficultyKey || currentDifficulty];
        var numRows = config.rows;
        var numCols = config.cols;
        var rng = mulberry32(seed);
        var words = selectWords(rng, config.words, numRows, numCols);

        var solution = [];
        for (var w = 0; w < numRows; w++) {
            solution.push(words[w].split(''));
        }

        var grid = [];
        for (var g = 0; g < numRows; g++) {
            grid.push(solution[g].slice());
        }

        var fixed = [];
        for (var f = 0; f < numRows; f++) {
            var fixedRow = [];
            for (var fc2 = 0; fc2 < numCols; fc2++) {
                fixedRow.push(false);
            }
            fixed.push(fixedRow);
        }

        var par = 0;

        var allRows = [];
        for (var ri = 0; ri < numRows; ri++) {
            allRows.push(ri);
        }

        for (var col = 0; col < numCols; col++) {
            var fixCount = rng() < 0.4 ? 2 : 1;

            var rowOrder = seededShuffle(allRows, rng);
            for (var fc = 0; fc < fixCount; fc++) {
                fixed[rowOrder[fc]][col] = true;
            }

            var unfixedRows = [];
            for (var r = 0; r < numRows; r++) {
                if (!fixed[r][col]) {
                    unfixedRows.push(r);
                }
            }

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
    var DIFFICULTY_KEY = 'daily-addicted-difficulty';

    var gameMode = null;
    var speedrunState = {
        timer: 150,
        intervalId: null,
        solved: 0
    };

    var MAX_HINTS = 3;
    var HINT_PENALTY = 2;

    var state = {
        date: null,
        difficulty: null,
        grid: null,
        solution: null,
        fixed: null,
        words: null,
        par: 0,
        swaps: 0,
        selected: null,
        completed: false,
        rowsComplete: null,
        initialGrid: null,
        hintsUsed: 0,
        hintedCells: []
    };

    function makeRowsComplete(numRows) {
        var arr = [];
        for (var i = 0; i < numRows; i++) {
            arr.push(false);
        }
        return arr;
    }

    function getStorageKeyForDifficulty() {
        return STORAGE_KEY + '-' + currentDifficulty;
    }

    function saveState() {
        if (gameMode === 'speedrun') return;
        try {
            var toSave = {
                date: state.date,
                difficulty: currentDifficulty,
                grid: state.grid,
                swaps: state.swaps,
                completed: state.completed,
                rowsComplete: state.rowsComplete,
                initialGrid: state.initialGrid,
                hintsUsed: state.hintsUsed,
                hintedCells: state.hintedCells
            };
            localStorage.setItem(getStorageKeyForDifficulty(), JSON.stringify(toSave));
        } catch (e) {}
    }

    function loadState() {
        try {
            var raw = localStorage.getItem(getStorageKeyForDifficulty());
            if (!raw) return null;
            var saved = JSON.parse(raw);
            if (saved && saved.date === getDateString() && saved.difficulty === currentDifficulty) {
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
        renderHintButton();
    }

    function renderGrid() {
        var config = getDifficultyConfig();
        var numRows = config.rows;
        var numCols = config.cols;
        var container = document.getElementById('grid-container');
        container.innerHTML = '';
        container.setAttribute('data-cols', numCols);

        for (var row = 0; row < numRows; row++) {
            var rowEl = document.createElement('div');
            rowEl.className = 'grid-row';
            if (state.rowsComplete[row]) {
                rowEl.classList.add('row-complete');
            }

            for (var col = 0; col < numCols; col++) {
                var cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.textContent = state.grid[row][col];
                cell.setAttribute('data-row', row);
                cell.setAttribute('data-col', col);

                if (state.fixed[row][col]) {
                    cell.classList.add('fixed');
                }
                if (isCellHinted(row, col)) {
                    cell.classList.add('hinted');
                }
                if (state.rowsComplete[row]) {
                    cell.classList.add('complete');
                }
                if (state.selected && state.selected.row === row && state.selected.col === col) {
                    cell.classList.add('selected');
                }

                if (state.selected && !state.completed &&
                    !state.rowsComplete[row] && !state.fixed[row][col] && !isCellHinted(row, col) &&
                    state.selected.col === col &&
                    !(state.selected.row === row && state.selected.col === col)) {
                    cell.classList.add('swap-target');
                }

                if (!state.completed && !state.rowsComplete[row] && !state.fixed[row][col] && !isCellHinted(row, col)) {
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
        var hintBar = document.getElementById('hint-bar');
        var hintNote = document.getElementById('hint-penalty-note');
        if (hintBar && hintNote) {
            if (state.hintsUsed > 0) {
                hintBar.classList.remove('hidden');
                hintNote.textContent = 'Hints used: ' + state.hintsUsed + ' (+' + (state.hintsUsed * HINT_PENALTY) + ' swap penalty)';
            } else {
                hintBar.classList.add('hidden');
            }
        }
    }

    function isCellHinted(row, col) {
        for (var i = 0; i < state.hintedCells.length; i++) {
            if (state.hintedCells[i].row === row && state.hintedCells[i].col === col) {
                return true;
            }
        }
        return false;
    }

    function renderHintButton() {
        var btn = document.getElementById('hint-btn');
        var countEl = document.getElementById('hint-count');
        if (!btn || !countEl) return;
        var remaining = MAX_HINTS - state.hintsUsed;
        countEl.textContent = remaining;
        if (remaining <= 0 || state.completed) {
            btn.disabled = true;
            btn.classList.add('disabled');
        } else {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    }

    function useHint() {
        if (state.completed) return;
        if (state.hintsUsed >= MAX_HINTS) {
            showMessage('No hints remaining!');
            return;
        }

        var config = getDifficultyConfig();
        var candidates = [];

        for (var row = 0; row < config.rows; row++) {
            if (state.rowsComplete[row]) continue;
            for (var col = 0; col < config.cols; col++) {
                if (state.fixed[row][col]) continue;
                if (isCellHinted(row, col)) continue;
                if (state.grid[row][col] !== state.solution[row][col]) {
                    candidates.push({ row: row, col: col });
                }
            }
        }

        if (candidates.length === 0) {
            showMessage('No more cells to hint!');
            return;
        }

        var pick = candidates[Math.floor(Math.random() * candidates.length)];
        state.grid[pick.row][pick.col] = state.solution[pick.row][pick.col];
        state.hintedCells.push({ row: pick.row, col: pick.col });
        state.hintsUsed++;
        state.swaps += HINT_PENALTY;
        state.selected = null;

        checkRows();
        render();

        var config2 = getDifficultyConfig();
        var allComplete = true;
        for (var i = 0; i < config2.rows; i++) {
            if (!state.rowsComplete[i]) {
                allComplete = false;
                break;
            }
        }

        if (allComplete) {
            if (gameMode === 'speedrun') {
                speedrunState.solved++;
                updateSpeedrunSolvedDisplay();
                loadNewSpeedRunPuzzle();
            } else {
                state.completed = true;
                saveState();
                setTimeout(function() {
                    if (typeof window.launchConfetti === 'function') {
                        window.launchConfetti();
                    }
                    showCompletionModal();
                }, 600);
            }
        } else {
            saveState();
        }
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
        if (isCellHinted(row, col)) return;

        if (!state.selected) {
            state.selected = { row: row, col: col };
            render();
        } else if (state.selected.row === row && state.selected.col === col) {
            state.selected = null;
            render();
        } else if (state.selected.col === col) {
            var r1 = state.selected.row;
            var c1 = state.selected.col;

            if (state.fixed[row][col] || state.rowsComplete[row] ||
                state.fixed[r1][c1] || state.rowsComplete[r1] ||
                isCellHinted(row, col) || isCellHinted(r1, c1)) {
                state.selected = null;
                render();
                return;
            }

            var temp = state.grid[r1][c1];
            state.grid[r1][c1] = state.grid[row][col];
            state.grid[row][col] = temp;
            state.swaps++;
            state.selected = null;

            checkRows();
            render();

            animateSwap(r1, c1);
            animateSwap(row, col);

            var config = getDifficultyConfig();
            var allComplete = true;
            for (var i = 0; i < config.rows; i++) {
                if (!state.rowsComplete[i]) {
                    allComplete = false;
                    break;
                }
            }

            if (allComplete) {
                if (gameMode === 'speedrun') {
                    speedrunState.solved++;
                    updateSpeedrunSolvedDisplay();
                    loadNewSpeedRunPuzzle();
                } else {
                    state.completed = true;
                    saveState();
                    setTimeout(function() {
                        if (typeof window.launchConfetti === 'function') {
                            window.launchConfetti();
                        }
                        showCompletionModal();
                    }, 600);
                }
            } else {
                saveState();
            }
        } else {
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
        var config = getDifficultyConfig();
        for (var row = 0; row < config.rows; row++) {
            if (state.rowsComplete[row]) continue;
            var match = true;
            for (var col = 0; col < config.cols; col++) {
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
        updateHelpModalText();
        document.getElementById('help-modal').classList.remove('hidden');
    }

    function hideHelpModal() {
        document.getElementById('help-modal').classList.add('hidden');
    }

    function hideCompleteModal() {
        document.getElementById('complete-modal').classList.add('hidden');
    }

    function updateHelpModalText() {
        var config = getDifficultyConfig();
        var subtitleEl = document.querySelector('.help-subtitle');
        if (subtitleEl) {
            subtitleEl.textContent = 'Unscramble the grid to reveal ' + config.rows + ' hidden words!';
        }
        var wordLenRule = document.getElementById('help-rule-wordlen');
        if (wordLenRule) {
            wordLenRule.innerHTML = 'Each <strong>row</strong> contains a scrambled ' + config.cols + '-letter word';
        }
        var goalRule = document.getElementById('help-rule-goal');
        if (goalRule) {
            goalRule.innerHTML = 'Complete all ' + config.rows + ' words in as <strong>few swaps</strong> as possible!';
        }
        var exampleGrid = document.querySelector('.example-grid');
        if (exampleGrid) {
            var exampleLetters;
            if (config.cols === 4) {
                exampleLetters = [
                    { letter: 'H', fixed: true },
                    { letter: 'O', fixed: false },
                    { letter: 'M', fixed: false },
                    { letter: 'E', fixed: true }
                ];
            } else if (config.cols === 6) {
                exampleLetters = [
                    { letter: 'B', fixed: true },
                    { letter: 'R', fixed: false },
                    { letter: 'I', fixed: false },
                    { letter: 'D', fixed: false },
                    { letter: 'G', fixed: true },
                    { letter: 'E', fixed: false }
                ];
            } else {
                exampleLetters = [
                    { letter: 'H', fixed: true },
                    { letter: 'O', fixed: false },
                    { letter: 'R', fixed: false },
                    { letter: 'S', fixed: true },
                    { letter: 'E', fixed: false }
                ];
            }
            exampleGrid.innerHTML = '';
            for (var i = 0; i < exampleLetters.length; i++) {
                var cell = document.createElement('div');
                cell.className = 'example-cell' + (exampleLetters[i].fixed ? ' fixed' : '');
                cell.textContent = exampleLetters[i].letter;
                exampleGrid.appendChild(cell);
            }
        }
    }

    function showCompletionModal() {
        var modal = document.getElementById('complete-modal');
        var config = getDifficultyConfig();

        var wordsEl = document.getElementById('result-words');
        var wordsHTML = '';
        for (var i = 0; i < state.words.length; i++) {
            wordsHTML += '<span class="result-word">' + state.words[i] + '</span>';
        }
        wordsEl.innerHTML = wordsHTML;

        var statsEl = document.getElementById('result-stats');
        var hintsHTML = '';
        if (state.hintsUsed > 0) {
            hintsHTML =
                '<div class="stat">' +
                    '<span class="stat-value">' + state.hintsUsed + '</span>' +
                    '<span class="stat-label">Hints</span>' +
                '</div>';
        }
        statsEl.innerHTML =
            '<div class="stat">' +
                '<span class="stat-value">' + state.swaps + '</span>' +
                '<span class="stat-label">Swaps</span>' +
            '</div>' +
            '<div class="stat">' +
                '<span class="stat-value">' + state.par + '</span>' +
                '<span class="stat-label">Par</span>' +
            '</div>' +
            hintsHTML +
            '<div class="stat">' +
                '<span class="stat-value">' + config.label + '</span>' +
                '<span class="stat-label">Difficulty</span>' +
            '</div>';

        var shareEl = document.getElementById('share-preview');
        shareEl.textContent = getShareText();

        startCountdown();
        modal.classList.remove('hidden');
    }

    function getShareText() {
        var config = getDifficultyConfig();
        var puzzleNum = getPuzzleNumber();
        var lines = [];
        lines.push('\uD83E\uDDE9 Daily Addicted #' + puzzleNum + ' (' + config.label + ')');
        lines.push('');

        for (var row = 0; row < config.rows; row++) {
            var rowText = '';
            for (var col = 0; col < config.cols; col++) {
                if (state.fixed[row][col] ||
                    state.initialGrid[row][col] === state.solution[row][col]) {
                    rowText += '\uD83D\uDFE9';
                } else {
                    rowText += '\uD83D\uDFE7';
                }
            }
            lines.push(rowText);
        }

        lines.push('');
        lines.push('Swaps: ' + state.swaps + ' (Par: ' + state.par + ')');
        if (state.hintsUsed > 0) {
            lines.push('Used ' + state.hintsUsed + ' hint' + (state.hintsUsed > 1 ? 's' : ''));
        }
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

    // ========== PUZZLE LOADING ==========
    function loadPuzzleIntoState(puzzle) {
        var config = getDifficultyConfig();
        state.difficulty = currentDifficulty;
        state.grid = [];
        state.initialGrid = [];
        for (var i = 0; i < config.rows; i++) {
            state.grid.push(puzzle.grid[i].slice());
            state.initialGrid.push(puzzle.grid[i].slice());
        }
        state.solution = puzzle.solution;
        state.fixed = puzzle.fixed;
        state.words = puzzle.words;
        state.par = puzzle.par;
        state.swaps = 0;
        state.completed = false;
        state.rowsComplete = makeRowsComplete(config.rows);
        state.selected = null;
        state.hintsUsed = 0;
        state.hintedCells = [];
        checkRows();
    }

    // ========== SPEED RUN ==========
    function getRandomSeed() {
        return Math.floor(Math.random() * 2147483647) + 1;
    }

    function loadNewSpeedRunPuzzle() {
        loadPuzzleIntoState(generatePuzzle(getRandomSeed()));
        render();
    }

    function updateTimerDisplay() {
        var el = document.getElementById('speedrun-timer');
        var minutes = Math.floor(speedrunState.timer / 60);
        var seconds = speedrunState.timer % 60;
        el.textContent = minutes + ':' + padZero(seconds);
        if (speedrunState.timer <= 30) {
            el.classList.add('critical');
        } else {
            el.classList.remove('critical');
        }
    }

    function updateSpeedrunSolvedDisplay() {
        document.getElementById('speedrun-solved').textContent = 'Solved: ' + speedrunState.solved;
    }

    function startSpeedRunTimer() {
        if (speedrunState.intervalId) {
            clearInterval(speedrunState.intervalId);
            speedrunState.intervalId = null;
        }
        speedrunState.timer = 150;
        updateTimerDisplay();
        speedrunState.intervalId = setInterval(function() {
            speedrunState.timer--;
            updateTimerDisplay();
            if (speedrunState.timer <= 0) {
                endSpeedRun();
            }
        }, 1000);
    }

    function endSpeedRun() {
        if (speedrunState.intervalId) {
            clearInterval(speedrunState.intervalId);
            speedrunState.intervalId = null;
        }
        state.completed = true;
        render();
        showSpeedRunModal();
    }

    function showSpeedRunModal() {
        var config = getDifficultyConfig();
        var statsEl = document.getElementById('speedrun-result-stats');
        statsEl.innerHTML =
            '<div class="stat">' +
                '<span class="stat-value">' + speedrunState.solved + '</span>' +
                '<span class="stat-label">Puzzles Solved</span>' +
            '</div>' +
            '<div class="stat">' +
                '<span class="stat-value">' + config.label + '</span>' +
                '<span class="stat-label">Difficulty</span>' +
            '</div>';
        document.getElementById('speedrun-modal').classList.remove('hidden');
    }

    function hideSpeedRunModal() {
        document.getElementById('speedrun-modal').classList.add('hidden');
    }

    // ========== DIFFICULTY SELECTOR ==========
    function setDifficulty(diff) {
        currentDifficulty = diff;
        try {
            localStorage.setItem(DIFFICULTY_KEY, diff);
        } catch (e) {}
        updateDifficultyButtons();
        updateGridSizeClass();
    }

    function loadSavedDifficulty() {
        try {
            var saved = localStorage.getItem(DIFFICULTY_KEY);
            if (saved && DIFFICULTY[saved]) {
                currentDifficulty = saved;
            }
        } catch (e) {}
    }

    function updateDifficultyButtons() {
        var btns = document.querySelectorAll('.difficulty-btn');
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            if (btn.getAttribute('data-difficulty') === currentDifficulty) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    }

    function updateGridSizeClass() {
        var app = document.getElementById('app');
        app.classList.remove('grid-easy', 'grid-medium', 'grid-hard');
        app.classList.add('grid-' + currentDifficulty);
    }

    // ========== MODE MANAGEMENT ==========
    function showModeSelect() {
        if (speedrunState.intervalId) {
            clearInterval(speedrunState.intervalId);
            speedrunState.intervalId = null;
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        gameMode = null;
        document.getElementById('app').classList.remove('game-active');
        hideSpeedRunModal();
        hideCompleteModal();
        document.getElementById('speedrun-bar').classList.add('hidden');
    }

    function startDailyMode() {
        gameMode = 'daily';
        document.getElementById('app').classList.add('game-active');
        document.getElementById('speedrun-bar').classList.add('hidden');
        document.getElementById('puzzle-number').style.display = '';
        document.querySelector('footer p').textContent = 'A new puzzle every day at midnight UTC';
        updateGridSizeClass();
        initDailyPuzzle();
    }

    function startSpeedRunMode() {
        gameMode = 'speedrun';
        document.getElementById('app').classList.add('game-active');
        document.getElementById('speedrun-bar').classList.remove('hidden');
        document.getElementById('puzzle-number').style.display = 'none';
        document.querySelector('footer p').textContent = 'Solve as many puzzles as you can!';
        updateGridSizeClass();

        speedrunState.solved = 0;
        updateSpeedrunSolvedDisplay();

        loadNewSpeedRunPuzzle();
        startSpeedRunTimer();
    }

    // ========== INITIALIZATION ==========
    function initDailyPuzzle() {
        var dateStr = getDateString();
        var config = getDifficultyConfig();
        var seed = getDateSeed() + config.seedOffset * 100000;
        var puzzle = generatePuzzle(seed);

        var saved = loadState();

        if (saved) {
            state.date = saved.date;
            state.difficulty = saved.difficulty;
            state.grid = saved.grid;
            state.swaps = saved.swaps;
            state.completed = saved.completed;
            state.rowsComplete = saved.rowsComplete;
            state.initialGrid = saved.initialGrid;
            state.hintsUsed = saved.hintsUsed || 0;
            state.hintedCells = saved.hintedCells || [];
            state.solution = puzzle.solution;
            state.fixed = puzzle.fixed;
            state.words = puzzle.words;
            state.par = puzzle.par;
            state.selected = null;
        } else {
            state.date = dateStr;
            loadPuzzleIntoState(puzzle);
            saveState();
        }

        render();

        if (state.completed) {
            setTimeout(showCompletionModal, 400);
        }
    }

    function init() {
        loadSavedDifficulty();
        updateDifficultyButtons();

        document.getElementById('help-btn').addEventListener('click', showHelpModal);
        document.getElementById('help-close-btn').addEventListener('click', hideHelpModal);
        document.getElementById('hint-btn').addEventListener('click', useHint);

        var helpCloseX = document.querySelector('#help-modal .modal-close');
        if (helpCloseX) {
            helpCloseX.addEventListener('click', hideHelpModal);
        }

        document.getElementById('share-btn').addEventListener('click', copyShareText);

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

        document.getElementById('mode-daily-btn').addEventListener('click', startDailyMode);
        document.getElementById('mode-speedrun-btn').addEventListener('click', startSpeedRunMode);

        var diffBtns = document.querySelectorAll('.difficulty-btn');
        for (var d = 0; d < diffBtns.length; d++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    setDifficulty(btn.getAttribute('data-difficulty'));
                });
            })(diffBtns[d]);
        }

        document.getElementById('speedrun-again-btn').addEventListener('click', function() {
            hideSpeedRunModal();
            startSpeedRunMode();
        });
        document.getElementById('speedrun-menu-btn').addEventListener('click', function() {
            showModeSelect();
        });

        if (!localStorage.getItem(VISITED_KEY)) {
            localStorage.setItem(VISITED_KEY, 'true');
            setTimeout(showHelpModal, 400);
        }

        showModeSelect();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
