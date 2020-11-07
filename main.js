import { problem001 } from './problems/problem001.js'
import { problem002 } from './problems/problem002.js'
import { problem003 } from './problems/problem003.js'
import { problem004 } from './problems/problem004.js'
import { problem005 } from './problems/problem005.js'
import { problem006 } from './problems/problem006.js'
import { problem007 } from './problems/problem007.js'
import { problem008 } from './problems/problem008.js'
import { problem009 } from './problems/problem009.js'
import { problem010 } from './problems/problem010.js'
import { problem011 } from './problems/problem011.js'
import { problem012 } from './problems/problem012.js'
import { problem013 } from './problems/problem013.js'
import { problem014 } from './problems/problem014.js'
import { problem016 } from './problems/problem016.js'
import { problem017 } from './problems/problem017.js'
import { problem020 } from './problems/problem020.js'

const problem008Sequence = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'
const problem011Matrix = [[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]]

const problem013Numbers =
[37107287533902102798797998220837590246510135740250n,
  46376937677490009712648124896970078050417018260538n,
  74324986199524741059474233309513058123726617309629n,
  91942213363574161572522430563301811072406154908250n,
  23067588207539346171171980310421047513778063246676n,
  89261670696623633820136378418383684178734361726757n,
  28112879812849979408065481931592621691275889832738n,
  44274228917432520321923589422876796487670272189318n,
  47451445736001306439091167216856844588711603153276n,
  70386486105843025439939619828917593665686757934951n,
  62176457141856560629502157223196586755079324193331n,
  64906352462741904929101432445813822663347944758178n,
  92575867718337217661963751590579239728245598838407n,
  58203565325359399008402633568948830189458628227828n,
  80181199384826282014278194139940567587151170094390n,
  35398664372827112653829987240784473053190104293586n,
  86515506006295864861532075273371959191420517255829n,
  71693888707715466499115593487603532921714970056938n,
  54370070576826684624621495650076471787294438377604n,
  53282654108756828443191190634694037855217779295145n,
  36123272525000296071075082563815656710885258350721n,
  45876576172410976447339110607218265236877223636045n,
  17423706905851860660448207621209813287860733969412n,
  81142660418086830619328460811191061556940512689692n,
  51934325451728388641918047049293215058642563049483n,
  62467221648435076201727918039944693004732956340691n,
  15732444386908125794514089057706229429197107928209n,
  55037687525678773091862540744969844508330393682126n,
  18336384825330154686196124348767681297534375946515n,
  80386287592878490201521685554828717201219257766954n,
  78182833757993103614740356856449095527097864797581n,
  16726320100436897842553539920931837441497806860984n,
  48403098129077791799088218795327364475675590848030n,
  87086987551392711854517078544161852424320693150332n,
  59959406895756536782107074926966537676326235447210n,
  69793950679652694742597709739166693763042633987085n,
  41052684708299085211399427365734116182760315001271n,
  65378607361501080857009149939512557028198746004375n,
  35829035317434717326932123578154982629742552737307n,
  94953759765105305946966067683156574377167401875275n,
  88902802571733229619176668713819931811048770190271n,
  25267680276078003013678680992525463401061632866526n,
  36270218540497705585629946580636237993140746255962n,
  24074486908231174977792365466257246923322810917141n,
  91430288197103288597806669760892938638285025333403n,
  34413065578016127815921815005561868836468420090470n,
  23053081172816430487623791969842487255036638784583n,
  11487696932154902810424020138335124462181441773470n,
  63783299490636259666498587618221225225512486764533n,
  67720186971698544312419572409913959008952310058822n,
  95548255300263520781532296796249481641953868218774n,
  76085327132285723110424803456124867697064507995236n,
  37774242535411291684276865538926205024910326572967n,
  23701913275725675285653248258265463092207058596522n,
  29798860272258331913126375147341994889534765745501n,
  18495701454879288984856827726077713721403798879715n,
  38298203783031473527721580348144513491373226651381n,
  34829543829199918180278916522431027392251122869539n,
  40957953066405232632538044100059654939159879593635n,
  29746152185502371307642255121183693803580388584903n,
  41698116222072977186158236678424689157993532961922n,
  62467957194401269043877107275048102390895523597457n,
  23189706772547915061505504953922979530901129967519n,
  86188088225875314529584099251203829009407770775672n,
  11306739708304724483816533873502340845647058077308n,
  82959174767140363198008187129011875491310547126581n,
  97623331044818386269515456334926366572897563400500n,
  42846280183517070527831839425882145521227251250327n,
  55121603546981200581762165212827652751691296897789n,
  32238195734329339946437501907836945765883352399886n,
  75506164965184775180738168837861091527357929701337n,
  62177842752192623401942399639168044983993173312731n,
  32924185707147349566916674687634660915035914677504n,
  99518671430235219628894890102423325116913619626622n,
  73267460800591547471830798392868535206946944540724n,
  76841822524674417161514036427982273348055556214818n,
  97142617910342598647204516893989422179826088076852n,
  87783646182799346313767754307809363333018982642090n,
  10848802521674670883215120185883543223812876952786n,
  71329612474782464538636993009049310363619763878039n,
  62184073572399794223406235393808339651327408011116n,
  66627891981488087797941876876144230030984490851411n,
  60661826293682836764744779239180335110989069790714n,
  85786944089552990653640447425576083659976645795096n,
  66024396409905389607120198219976047599490197230297n,
  64913982680032973156037120041377903785566085089252n,
  16730939319872750275468906903707539413042652315011n,
  94809377245048795150954100921645863754710598436791n,
  78639167021187492431995700641917969777599028300699n,
  15368713711936614952811305876380278410754449733078n,
  40789923115535562561142322423255033685442488917353n,
  44889911501440648020369068063960672322193204149535n,
  41503128880339536053299340368006977710650566631954n,
  81234880673210146739058568557934581403627822703280n,
  82616570773948327592232845941706525094512325230608n,
  22918802058777319719839450180888072429661980811197n,
  77158542502016545090413245809786882778948721859617n,
  72107838435069186155435662884062257473692284509516n,
  20849603980134001723930671666823555245252804609722n,
  53503534226472524250874054075591789781264330331690n]

console.log(problem001(1_000))
console.log(problem002(33))
console.log(problem003(600_851_475_143))
console.log(problem004(3))
console.log(problem005([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
console.log(problem006(100))
console.log(problem007(10_001))
console.log(problem008(problem008Sequence, 13))
console.log(problem009(1000))
console.log(problem010(2e6))
console.log(problem011(problem011Matrix, 4))
console.log(problem012(500))
console.log(problem013(problem013Numbers, 10))
console.log(problem014(1e6))
console.log(problem016(2n, 1000n))
console.log(problem017([...Array(1000 + 1).keys()].slice(1)))
console.log(problem020(100n))
