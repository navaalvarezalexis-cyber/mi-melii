/* =================================================================
   MI PEQUEÑITA MELI — app.js
   Todo el almacenamiento usa localStorage: funciona 100% sin internet
   y sigue funcionando igual una vez subida a GitHub Pages.
   ================================================================= */

/* ---------- DATOS: ALIMENTOS ---------- */
const FOODS = [
{name:"Manzana",cat:"Frutas",por:"1 pieza mediana (180g)",kcal:95,prot:0.5,carb:25,gras:0.3,fib:4.4},
{name:"Plátano",cat:"Frutas",por:"1 pieza mediana (120g)",kcal:105,prot:1.3,carb:27,gras:0.4,fib:3.1},
{name:"Naranja",cat:"Frutas",por:"1 pieza (130g)",kcal:62,prot:1.2,carb:15,gras:0.2,fib:3.1},
{name:"Fresas",cat:"Frutas",por:"1 taza (150g)",kcal:49,prot:1,carb:12,gras:0.5,fib:3},
{name:"Uvas",cat:"Frutas",por:"1 taza (150g)",kcal:104,prot:1.1,carb:27,gras:0.2,fib:1.4},
{name:"Papaya",cat:"Frutas",por:"1 taza (145g)",kcal:62,prot:0.7,carb:16,gras:0.2,fib:2.5},
{name:"Mango",cat:"Frutas",por:"1 taza (165g)",kcal:99,prot:1.4,carb:25,gras:0.6,fib:2.6},
{name:"Piña",cat:"Frutas",por:"1 taza (165g)",kcal:82,prot:0.9,carb:22,gras:0.2,fib:2.3},
{name:"Sandía",cat:"Frutas",por:"1 taza (152g)",kcal:46,prot:0.9,carb:11.5,gras:0.2,fib:0.6},
{name:"Pera",cat:"Frutas",por:"1 pieza (178g)",kcal:101,prot:0.6,carb:27,gras:0.2,fib:5.5},
{name:"Melón",cat:"Frutas",por:"1 taza (160g)",kcal:54,prot:1.3,carb:13,gras:0.3,fib:1.4},
{name:"Aguacate",cat:"Frutas",por:"1/2 pieza (100g)",kcal:160,prot:2,carb:8.5,gras:14.7,fib:6.7},
{name:"Limón",cat:"Frutas",por:"1 pieza (58g)",kcal:17,prot:0.6,carb:5.4,gras:0.2,fib:1.6},
{name:"Toronja",cat:"Frutas",por:"1/2 pieza (123g)",kcal:52,prot:0.9,carb:13,gras:0.2,fib:2},
{name:"Fresa con crema (casera)",cat:"Frutas",por:"1 taza",kcal:210,prot:2.5,carb:22,gras:12,fib:2.5},

{name:"Lechuga",cat:"Verduras",por:"1 taza (47g)",kcal:5,prot:0.5,carb:1,gras:0.1,fib:0.5},
{name:"Jitomate",cat:"Verduras",por:"1 pieza mediana (123g)",kcal:22,prot:1.1,carb:4.8,gras:0.2,fib:1.5},
{name:"Zanahoria",cat:"Verduras",por:"1 pieza (61g)",kcal:25,prot:0.6,carb:6,gras:0.1,fib:1.7},
{name:"Brócoli",cat:"Verduras",por:"1 taza (91g)",kcal:31,prot:2.5,carb:6,gras:0.3,fib:2.4},
{name:"Espinaca",cat:"Verduras",por:"1 taza cruda (30g)",kcal:7,prot:0.9,carb:1.1,gras:0.1,fib:0.7},
{name:"Pepino",cat:"Verduras",por:"1 taza (104g)",kcal:16,prot:0.7,carb:3.8,gras:0.1,fib:0.5},
{name:"Calabacita",cat:"Verduras",por:"1 taza (124g)",kcal:20,prot:1.5,carb:4,gras:0.3,fib:1.3},
{name:"Elote",cat:"Verduras",por:"1 pieza (90g)",kcal:96,prot:3.4,carb:21,gras:1.5,fib:2.4},
{name:"Papa",cat:"Verduras",por:"1 pieza mediana (173g)",kcal:161,prot:4.3,carb:37,gras:0.2,fib:3.8},
{name:"Camote",cat:"Verduras",por:"1 pieza mediana (130g)",kcal:112,prot:2,carb:26,gras:0.1,fib:3.9},
{name:"Chile",cat:"Verduras",por:"1 pieza (45g)",kcal:18,prot:0.9,carb:4.3,gras:0.2,fib:0.8},
{name:"Cebolla",cat:"Verduras",por:"1/2 taza picada (80g)",kcal:32,prot:0.9,carb:7.5,gras:0.1,fib:1.4},
{name:"Nopales",cat:"Verduras",por:"1 taza (86g)",kcal:14,prot:1.1,carb:3,gras:0.1,fib:1.9},
{name:"Champiñones",cat:"Verduras",por:"1 taza (70g)",kcal:15,prot:2.2,carb:2.3,gras:0.2,fib:0.7},

{name:"Pechuga de pollo",cat:"Proteínas",por:"100g cocida",kcal:165,prot:31,carb:0,gras:3.6,fib:0},
{name:"Huevo",cat:"Proteínas",por:"1 pieza grande",kcal:72,prot:6.3,carb:0.4,gras:4.8,fib:0},
{name:"Carne de res molida",cat:"Proteínas",por:"100g cocida",kcal:176,prot:20,carb:0,gras:10,fib:0},
{name:"Atún en agua",cat:"Proteínas",por:"100g",kcal:116,prot:26,carb:0,gras:1,fib:0},
{name:"Salmón",cat:"Proteínas",por:"100g cocido",kcal:208,prot:20,carb:0,gras:13,fib:0},
{name:"Frijoles negros",cat:"Proteínas",por:"1 taza cocidos (172g)",kcal:227,prot:15,carb:41,gras:0.9,fib:15},
{name:"Frijoles pintos",cat:"Proteínas",por:"1 taza cocidos (171g)",kcal:245,prot:15,carb:45,gras:1.1,fib:15},
{name:"Lentejas",cat:"Proteínas",por:"1 taza cocidas (198g)",kcal:230,prot:18,carb:40,gras:0.8,fib:16},
{name:"Garbanzos",cat:"Proteínas",por:"1 taza cocidos (164g)",kcal:269,prot:14.5,carb:45,gras:4.2,fib:12.5},
{name:"Queso panela",cat:"Proteínas",por:"30g",kcal:60,prot:6,carb:1,gras:4,fib:0},
{name:"Queso fresco",cat:"Proteínas",por:"30g",kcal:74,prot:4.5,carb:1.2,gras:6,fib:0},
{name:"Yogur griego natural",cat:"Proteínas",por:"170g",kcal:100,prot:17,carb:6,gras:0.7,fib:0},
{name:"Tofu firme",cat:"Proteínas",por:"100g",kcal:144,prot:15.5,carb:3,gras:8.7,fib:2.3},
{name:"Camarón",cat:"Proteínas",por:"100g cocido",kcal:99,prot:24,carb:0.2,gras:0.3,fib:0},
{name:"Pavo (pechuga)",cat:"Proteínas",por:"100g cocida",kcal:135,prot:30,carb:0,gras:1,fib:0},

{name:"Arroz blanco",cat:"Granos",por:"1 taza cocido (158g)",kcal:205,prot:4.3,carb:45,gras:0.4,fib:0.6},
{name:"Arroz integral",cat:"Granos",por:"1 taza cocido (195g)",kcal:216,prot:5,carb:45,gras:1.8,fib:3.5},
{name:"Avena cocida",cat:"Granos",por:"1 taza (234g)",kcal:166,prot:6,carb:28,gras:3.6,fib:4},
{name:"Pan integral",cat:"Granos",por:"1 rebanada (28g)",kcal:69,prot:3.6,carb:12,gras:1.1,fib:1.9},
{name:"Pan blanco",cat:"Granos",por:"1 rebanada (25g)",kcal:67,prot:2,carb:12.7,gras:0.8,fib:0.6},
{name:"Tortilla de maíz",cat:"Granos",por:"1 pieza (24g)",kcal:52,prot:1.4,carb:10.7,gras:0.5,fib:1.5},
{name:"Tortilla de harina",cat:"Granos",por:"1 pieza (45g)",kcal:140,prot:3.8,carb:24,gras:3.3,fib:1.4},
{name:"Pasta cocida",cat:"Granos",por:"1 taza (140g)",kcal:221,prot:8,carb:43,gras:1.3,fib:2.5},
{name:"Quinoa cocida",cat:"Granos",por:"1 taza (185g)",kcal:222,prot:8,carb:39,gras:3.6,fib:5.2},
{name:"Cereal de caja",cat:"Granos",por:"1 taza (30g)",kcal:110,prot:2,carb:24,gras:1,fib:2},

{name:"Leche entera",cat:"Lácteos",por:"1 taza (244g)",kcal:149,prot:7.7,carb:12,gras:8,fib:0},
{name:"Leche descremada",cat:"Lácteos",por:"1 taza (245g)",kcal:83,prot:8.3,carb:12,gras:0.2,fib:0},
{name:"Yogur natural",cat:"Lácteos",por:"1 taza (245g)",kcal:149,prot:8.5,carb:11.4,gras:8,fib:0},
{name:"Queso oaxaca",cat:"Lácteos",por:"30g",kcal:96,prot:6.3,carb:0.7,gras:7.5,fib:0},
{name:"Queso manchego",cat:"Lácteos",por:"30g",kcal:108,prot:7,carb:0.5,gras:8.8,fib:0},
{name:"Requesón",cat:"Lácteos",por:"1/2 taza (113g)",kcal:92,prot:12,carb:3.4,gras:3.5,fib:0},
{name:"Crema",cat:"Lácteos",por:"2 cdas (30g)",kcal:63,prot:0.4,carb:0.6,gras:6.9,fib:0},

{name:"Agua",cat:"Bebidas",por:"1 vaso (240ml)",kcal:0,prot:0,carb:0,gras:0,fib:0},
{name:"Café negro",cat:"Bebidas",por:"1 taza sin azúcar",kcal:2,prot:0.3,carb:0,gras:0,fib:0},
{name:"Té",cat:"Bebidas",por:"1 taza sin azúcar",kcal:2,prot:0,carb:0.5,gras:0,fib:0},
{name:"Refresco de cola",cat:"Bebidas",por:"1 lata (355ml)",kcal:140,prot:0,carb:39,gras:0,fib:0},
{name:"Jugo de naranja",cat:"Bebidas",por:"1 taza (248g)",kcal:112,prot:1.7,carb:26,gras:0.5,fib:0.5},
{name:"Agua de jamaica",cat:"Bebidas",por:"1 vaso (240ml, poca azúcar)",kcal:40,prot:0,carb:10,gras:0,fib:0},
{name:"Leche de almendra sin azúcar",cat:"Bebidas",por:"1 taza (240ml)",kcal:39,prot:1.5,carb:3.4,gras:2.9,fib:0.5},

{name:"Almendras",cat:"Snacks",por:"28g (~23 piezas)",kcal:164,prot:6,carb:6,gras:14,fib:3.5},
{name:"Nueces",cat:"Snacks",por:"28g",kcal:185,prot:4.3,carb:3.9,gras:18.5,fib:1.9},
{name:"Cacahuates",cat:"Snacks",por:"28g",kcal:161,prot:7.3,carb:4.6,gras:14,fib:2.4},
{name:"Pan dulce (concha)",cat:"Snacks",por:"1 pieza (80g)",kcal:280,prot:6,carb:45,gras:9,fib:1.5},
{name:"Galletas marías",cat:"Snacks",por:"4 piezas (28g)",kcal:130,prot:2,carb:22,gras:4,fib:0.5},
{name:"Chocolate amargo 70%",cat:"Snacks",por:"30g",kcal:170,prot:2,carb:13,gras:12,fib:3},
{name:"Palomitas naturales",cat:"Snacks",por:"3 tazas (24g)",kcal:93,prot:3,carb:19,gras:1,fib:3.5},
{name:"Aceite de oliva",cat:"Snacks",por:"1 cda (14g)",kcal:119,prot:0,carb:0,gras:13.5,fib:0},
{name:"Mantequilla de maní",cat:"Snacks",por:"2 cdas (32g)",kcal:188,prot:8,carb:6,gras:16,fib:2},
{name:"Miel",cat:"Snacks",por:"1 cda (21g)",kcal:64,prot:0.1,carb:17,gras:0,fib:0},
{name:"Azúcar",cat:"Snacks",por:"1 cda (12g)",kcal:49,prot:0,carb:12.6,gras:0,fib:0},

{name:"Taco de pollo",cat:"Comidas preparadas",por:"1 pieza (tortilla de maíz)",kcal:120,prot:9,carb:11,gras:4.5,fib:1},
{name:"Quesadilla de queso",cat:"Comidas preparadas",por:"1 pieza (tortilla de harina)",kcal:260,prot:11,carb:24,gras:14,fib:1},
{name:"Torta (jamón y queso)",cat:"Comidas preparadas",por:"1 pieza",kcal:450,prot:20,carb:50,gras:18,fib:3},
{name:"Tamal de pollo",cat:"Comidas preparadas",por:"1 pieza",kcal:220,prot:8,carb:28,gras:9,fib:2},
{name:"Pozole de pollo",cat:"Comidas preparadas",por:"1 taza",kcal:220,prot:15,carb:22,gras:8,fib:3},
{name:"Enchiladas verdes de pollo",cat:"Comidas preparadas",por:"2 piezas",kcal:380,prot:20,carb:30,gras:20,fib:3},
{name:"Sopa de fideo",cat:"Comidas preparadas",por:"1 taza",kcal:110,prot:3,carb:20,gras:2,fib:1},
{name:"Caldo de pollo con verduras",cat:"Comidas preparadas",por:"1 taza",kcal:90,prot:8,carb:8,gras:3,fib:1.5},
{name:"Chilaquiles verdes",cat:"Comidas preparadas",por:"1 porción",kcal:380,prot:12,carb:35,gras:22,fib:4},
{name:"Frijoles refritos",cat:"Comidas preparadas",por:"1/2 taza",kcal:118,prot:7,carb:20,gras:1.5,fib:7}
];

const CATS = ["Todos","Frutas","Verduras","Proteínas","Granos","Lácteos","Bebidas","Snacks","Comidas preparadas","Personalizados"];

/* ---------- DATOS: RECETAS ---------- */
const RECIPES = [
{name:"Avena con plátano y almendras",desc:"Avena cocida + plátano en rodajas + almendras picadas",kcal:410,prot:13,carb:60,gras:15},
{name:"Ensalada de pollo y aguacate",desc:"Pechuga a la plancha + lechuga + jitomate + aguacate + limón",kcal:380,prot:35,carb:12,gras:20},
{name:"Huevos revueltos con espinaca",desc:"2 huevos + espinaca salteada + 1 tortilla de maíz",kcal:230,prot:15,carb:12,gras:12},
{name:"Yogur griego con fresas y miel",desc:"Yogur griego + fresas + un toque de miel",kcal:180,prot:18,carb:20,gras:1},
{name:"Tacos de atún",desc:"Atún en agua + tortillas de maíz + jitomate + limón",kcal:300,prot:30,carb:25,gras:4},
{name:"Sopa de lentejas con verduras",desc:"Lentejas cocidas + zanahoria + cebolla + caldo",kcal:280,prot:20,carb:42,gras:2},
{name:"Pollo con camote y brócoli",desc:"Pechuga de pollo + camote horneado + brócoli al vapor",kcal:360,prot:38,carb:40,gras:5},
{name:"Quesadilla ligera con champiñones",desc:"Tortilla de maíz + queso panela + champiñones salteados",kcal:220,prot:14,carb:20,gras:10},
{name:"Batido de plátano y avena",desc:"Plátano + leche descremada + avena, licuados",kcal:250,prot:12,carb:45,gras:3},
{name:"Ensalada de garbanzos",desc:"Garbanzos + pepino + jitomate + cebolla + aceite de oliva",kcal:340,prot:15,carb:45,gras:12},
{name:"Salmón al horno con verduras",desc:"Salmón + calabacita + zanahoria al horno",kcal:290,prot:24,carb:12,gras:16},
{name:"Camarones con arroz integral",desc:"Camarón + arroz integral + limón",kcal:320,prot:29,carb:46,gras:2},
{name:"Tostadas de frijol",desc:"Tortilla tostada + frijoles refritos + queso fresco + lechuga",kcal:260,prot:12,carb:30,gras:9},
{name:"Fruta picada con yogur",desc:"Papaya + mango + yogur natural",kcal:230,prot:9,carb:38,gras:8},
{name:"Caldo de pollo casero",desc:"Caldo de pollo + zanahoria + calabacita + elote",kcal:180,prot:14,carb:25,gras:4}
];

/* ---------- DATOS: MENSAJES ---------- */
const MESSAGES = [
"Cada paso que das hoy cuenta, aunque sea pequeño.",
"No se trata de ser perfecta, se trata de ser constante.",
"Tu cuerpo ha estado contigo toda la vida, trátalo con cariño.",
"Un día a la vez. No tienes que resolverlo todo hoy.",
"Está bien tener días difíciles, lo importante es seguir intentando.",
"El cambio real toma tiempo, y tú tienes todo el tiempo del mundo.",
"Eres más fuerte de lo que crees.",
"Hoy es una nueva oportunidad para cuidarte.",
"No compitas con la de ayer, celebra a la de hoy.",
"Cada elección saludable es un acto de amor propio.",
"El progreso no siempre se ve en la báscula.",
"Mereces sentirte bien en tu propio cuerpo.",
"Confía en el proceso, incluso cuando sea lento.",
"Eres capaz de esto y de mucho más.",
"Un pequeño paso hoy es mejor que ningún paso.",
"Sé paciente contigo misma, estás aprendiendo algo nuevo.",
"Tu esfuerzo de hoy ya está haciendo la diferencia, aunque no lo notes.",
"No estás sola en esto.",
"Cada día que lo intentas ya es una victoria.",
"Mereces el mismo cariño que le das a los demás.",
"Beber agua es un pequeño gran hábito, ¡vas muy bien!",
"Comer con conciencia, no con culpa.",
"Aprender sobre lo que comes te da poder, no miedo.",
"Hoy elige algo que te haga sentir bien, no solo que se vea bien.",
"Tu bienestar es la meta, no la perfección.",
"Respira. Puedes con esto.",
"Cada comida es una nueva oportunidad, no una prueba que puedas reprobar.",
"El descanso también es parte de cuidarte.",
"Celebra lo que tu cuerpo puede hacer, no solo cómo se ve.",
"Rodéate de paciencia y compasión, empezando por ti misma.",
"No hay prisa. Este es tu camino, a tu paso.",
"Hoy puedes elegir cuidarte, y eso ya es hermoso.",
"Los hábitos pequeños, repetidos, cambian todo.",
"Confía en ti. Ya diste el primer paso, el más difícil.",
"No busques ser alguien más, solo la mejor versión de ti misma.",
"Cada intento cuenta, incluso si no sale perfecto.",
"Tu valor no depende de un número.",
"Ir despacio también es avanzar.",
"Equivocarte un día no borra todo lo que has logrado.",
"Eres mucho más que un plan alimenticio.",
"Cada 'sí' a tu bienestar es una victoria silenciosa.",
"No busques la perfección, busca sentirte mejor poco a poco.",
"Tienes permiso de ir a tu propio ritmo.",
"Hoy cuenta, y mañana también contará.",
"Estás construyendo un hábito de amor propio, no una obligación."
];

const NOVIO_MSGS = [
"Mi pequeñita Meli, estoy muy orgulloso de ti por dar este paso 💕",
"No importa qué tan lento vayas, yo voy a estar aquí apoyándote.",
"Te admiro por tu valentía para empezar algo nuevo.",
"Para mí ya eres increíble; esto es solo para que tú te sientas aún mejor.",
"Cuenta conmigo en los días buenos y en los difíciles.",
"Vamos a lograrlo juntos, un día a la vez.",
"Eres mi motivo para ser mejor cada día también.",
"Aquí estoy, creyendo en ti siempre. Te amo, pequeñita."
];

const TIPS = [
"Empieza agregando verduras a tus platillos, no tienes que quitar nada todavía.",
"Tomar agua antes de cada comida te ayuda a sentirte mejor.",
"No existen alimentos 'prohibidos', existen porciones y equilibrio.",
"Dormir bien es tan importante como comer bien.",
"Celebra las victorias pequeñas, no solo el resultado final.",
"Escuchar a tu cuerpo es más importante que seguir reglas estrictas.",
"Un antojo no arruina el progreso, es parte de ser humana.",
"Cocinar en casa te da más control, sin necesidad de contar cada cosa.",
"El progreso no es lineal, y está bien tener días difíciles.",
"Compara tu hoy con tu ayer, no con nadie más."
];

const MOODS = [
  {e:"😊",l:"Feliz"},{e:"💪",l:"Motivada"},{e:"😌",l:"Tranquila"},{e:"😔",l:"Baja"},{e:"😰",l:"Ansiosa"}
];

const MEALS = [
  {k:"desayuno",l:"Desayuno",e:"🌅"},
  {k:"comida",l:"Comida",e:"☀️"},
  {k:"cena",l:"Cena",e:"🌙"},
  {k:"snack",l:"Snack",e:"🍿"}
];

const ACHIEVEMENTS = [
  {id:"first_food",e:"🌱",l:"Primer paso",d:"Registraste tu primer alimento",check:s=>s.totalFoods>=1},
  {id:"water_goal",e:"💧",l:"Hidratada",d:"Cumpliste tu meta de agua",check:s=>s.waterGoalHit},
  {id:"first_journal",e:"📖",l:"Reflexiva",d:"Escribiste tu primera nota",check:s=>s.totalJournal>=1},
  {id:"explorer_25",e:"🍽️",l:"Exploradora",d:"25 alimentos registrados",check:s=>s.totalFoods>=25},
  {id:"first_fav",e:"❤️",l:"Con cariño",d:"Guardaste un mensaje favorito",check:s=>s.firstFavorite},
  {id:"seven_days",e:"🌿",l:"Constante",d:"7 días distintos usando la app",check:s=>s.daysUsed.length>=7},
  {id:"first_recipe",e:"🥗",l:"Chef en casa",d:"Probaste tu primera receta",check:s=>s.recipesTried>=1},
  {id:"own_reasons",e:"✍️",l:"Tu voz",d:"Escribiste tus razones",check:s=>s.firstReasons}
];

/* =================================================================
   ESTADO
   ================================================================= */
const memFallback = {};
let state = {
  activeTab:"inicio",
  comerView:"alimentos",
  customFoods:[],
  customMsgs:[],
  favorites:[],
  diary:{meals:{desayuno:[],comida:[],cena:[],snack:[]},water:0,mood:null,journal:""},
  reasons:"",
  settings:{waterGoal:8,sound:true},
  stats:{totalFoods:0,totalJournal:0,daysUsed:[],waterGoalHit:false,firstFavorite:false,firstReasons:false,recipesTried:0},
  activeCat:"Todos",
  search:"",
  today: todayKey(),
  heroMsgIdx:0,
  novioIdx:0,
  pendingMealSlot:"desayuno",
  currentAddItem:null,
  currentAddIsRecipe:false
};

/* =================================================================
   UTILIDADES
   ================================================================= */
function todayKey(){
  const d=new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function nowTime(){
  const d=new Date();
  return String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
}
function normalize(s){
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
function esc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function round1(n){ return Math.round(n*10)/10; }
function allFoods(){ return FOODS.concat(state.customFoods); }
function allMessages(){ return MESSAGES.concat(state.customMsgs); }
function fmtDate(){
  const d=new Date();
  return d.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"});
}
function guessMeal(){
  const h=new Date().getHours();
  if(h<11) return "desayuno";
  if(h<16) return "comida";
  if(h<21) return "cena";
  return "snack";
}
function last7Dates(){
  const arr=[];
  for(let i=6;i>=0;i--){
    const d=new Date();
    d.setDate(d.getDate()-i);
    arr.push(d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"));
  }
  return arr;
}
function dayLabel(dateStr){
  const d=new Date(dateStr+"T12:00:00");
  return d.toLocaleDateString("es-MX",{weekday:"short"}).replace(".","").slice(0,3);
}
function showToast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
function playTone(freq,dur){
  if(!state.settings.sound) return;
  try{
    const ctx = window.__actx || (window.__actx = new (window.AudioContext||window.webkitAudioContext)());
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type="sine"; o.frequency.value=freq;
    g.gain.setValueAtTime(0.09, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime+dur);
  }catch(e){}
}
function chime(){ playTone(880,0.12); setTimeout(()=>playTone(1175,0.16),110); }
function ding(){ playTone(740,0.1); }
function confettiBurst(){
  const colors=["#D9A441","#D97B87","#7C9885","#F0D9A8","#EFC06B"];
  const container=document.createElement("div");
  container.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:300;overflow:hidden;";
  document.body.appendChild(container);
  for(let i=0;i<26;i++){
    const p=document.createElement("div");
    const size=6+Math.random()*7;
    p.className="confetti-piece";
    p.style.cssText=`left:${50+(Math.random()*46-23)}%;top:38%;width:${size}px;height:${size}px;background:${colors[i%colors.length]};border-radius:${Math.random()>0.5?'50%':'3px'};opacity:1;transform:translateY(0) rotate(0deg);transition:transform 1.15s cubic-bezier(.2,.8,.3,1), opacity 1.15s ease;`;
    container.appendChild(p);
    requestAnimationFrame(()=>{
      p.style.transform=`translateY(${300+Math.random()*220}px) translateX(${(Math.random()*180-90)}px) rotate(${Math.random()*720-360}deg)`;
      p.style.opacity="0";
    });
  }
  setTimeout(()=>container.remove(),1400);
}

/* =================================================================
   ALMACENAMIENTO — localStorage (sin internet, y funciona en GitHub Pages)
   ================================================================= */
function sGet(key){
  try{
    const v = localStorage.getItem("meli:"+key);
    return v!==null ? JSON.parse(v) : null;
  }catch(e){
    return memFallback[key]!==undefined ? memFallback[key] : null;
  }
}
function sSet(key,val){
  try{
    localStorage.setItem("meli:"+key, JSON.stringify(val));
    return true;
  }catch(e){
    memFallback[key]=val;
    return false;
  }
}
function loadAll(){
  state.diary = sGet("diary:"+state.today) || {meals:{desayuno:[],comida:[],cena:[],snack:[]},water:0,mood:null,journal:""};
  if(!state.diary.meals) state.diary.meals={desayuno:[],comida:[],cena:[],snack:[]};
  MEALS.forEach(m=>{ if(!state.diary.meals[m.k]) state.diary.meals[m.k]=[]; });
  state.customFoods = sGet("custom-foods") || [];
  state.customMsgs = sGet("custom-messages") || [];
  state.favorites = sGet("favorites") || [];
  state.reasons = sGet("reasons") || "";
  state.settings = Object.assign({waterGoal:8,sound:true}, sGet("settings")||{});
  state.stats = Object.assign({totalFoods:0,totalJournal:0,daysUsed:[],waterGoalHit:false,firstFavorite:false,firstReasons:false,recipesTried:0}, sGet("stats")||{});

  if(state.stats.daysUsed.indexOf(state.today)===-1){
    state.stats.daysUsed.push(state.today);
    sSet("stats", state.stats);
  }

  document.getElementById("journal-input").value = state.diary.journal || "";
  document.getElementById("reasons-input").value = state.reasons || "";
  document.getElementById("set-water-goal").value = state.settings.waterGoal;
  document.getElementById("set-sound").classList.toggle("on", state.settings.sound);

  renderAll();
  if(!sGet("onboarding-seen")){ openModal("modal-welcome"); }
  registerSW();
}
function saveDiary(){ sSet("diary:"+state.today, state.diary); }

/* checks achievements, returns array of newly-unlocked ones */
function checkAchievements(){
  const unlocked = sGet("unlocked-achievements") || [];
  const newly=[];
  ACHIEVEMENTS.forEach(a=>{
    if(unlocked.indexOf(a.id)===-1 && a.check(state.stats)){
      unlocked.push(a.id);
      newly.push(a);
    }
  });
  if(newly.length){
    sSet("unlocked-achievements", unlocked);
    newly.forEach(a=> showToast(a.e+" ¡Logro desbloqueado! "+a.l));
    confettiBurst(); chime();
  }
  return unlocked;
}

/* =================================================================
   RENDER — INICIO
   ================================================================= */
function pickHeroMsg(){
  const list=allMessages();
  state.heroMsgIdx=Math.floor(Math.random()*list.length);
  return list[state.heroMsgIdx];
}
function renderInicio(){
  document.getElementById("header-date").textContent = fmtDate();
  if(!window.__heroSet){
    document.getElementById("hero-msg").textContent = pickHeroMsg();
    window.__heroSet=true;
  }
  const totalFoodsToday = MEALS.reduce((n,m)=>n+state.diary.meals[m.k].length,0);
  document.getElementById("stat-foods").textContent = totalFoodsToday;
  document.getElementById("stat-water").textContent = state.diary.water;
  const moodObj = MOODS.find(m=>m.l===state.diary.mood);
  document.getElementById("stat-mood").textContent = moodObj ? moodObj.e : "–";
  const dayIdx = Math.floor(Date.now()/86400000) % TIPS.length;
  document.getElementById("tip-of-day").textContent = TIPS[dayIdx];
}

/* =================================================================
   RENDER — COMER (alimentos + recetas)
   ================================================================= */
function renderChips(){
  const row=document.getElementById("chip-row");
  row.innerHTML = CATS.map(c=>
    `<button class="chip ${c===state.activeCat?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");
}
function renderFoodList(){
  const list=document.getElementById("food-list");
  const q=normalize(state.search.trim());
  const foods=allFoods();
  let filtered=foods.filter(f=>{
    const matchCat = state.activeCat==="Todos" || f.cat===state.activeCat;
    const matchQ = !q || normalize(f.name).includes(q);
    return matchCat && matchQ;
  });
  if(filtered.length===0){
    list.innerHTML = `<div class="empty-note">No encontramos ese alimento.<br>Puedes agregarlo tú misma abajo 👇</div>`;
    return;
  }
  if(state.activeCat==="Todos" && !q){
    let html="";
    CATS.slice(1).forEach(cat=>{
      const items=filtered.filter(f=>f.cat===cat);
      if(items.length===0) return;
      html += `<div class="cat-heading">${esc(cat)}</div>`;
      html += items.map(f=>foodRowHtml(f, foods.indexOf(f))).join("");
    });
    list.innerHTML = html;
  }else{
    list.innerHTML = filtered.map(f=>foodRowHtml(f, foods.indexOf(f))).join("");
  }
}
function foodRowHtml(f, idx){
  return `<div class="food-row" data-idx="${idx}">
    <div class="hx">🍽</div>
    <div class="info"><b>${esc(f.name)}</b><span>${esc(f.por)}</span></div>
    <div class="kcal">${f.kcal} kcal</div>
  </div>`;
}
function renderRecipeList(){
  const list=document.getElementById("recipe-list");
  list.innerHTML = RECIPES.map((r,i)=>`
    <div class="recipe-card" data-idx="${i}">
      <h4>${esc(r.name)}</h4>
      <p>${esc(r.desc)}</p>
      <div class="recipe-macros">
        <span>${r.kcal} kcal</span><span>${r.prot}g prot</span><span>${r.carb}g carb</span><span>${r.gras}g grasa</span>
      </div>
      <button class="btn btn-honey btn-sm recipe-add" data-idx="${i}">+ Agregar a mi diario</button>
    </div>
  `).join("");
}
function renderComer(){
  document.getElementById("view-alimentos").style.display = state.comerView==="alimentos" ? "block":"none";
  document.getElementById("view-recetas").style.display = state.comerView==="recetas" ? "block":"none";
  document.querySelectorAll(".toggle-btn").forEach(b=> b.classList.toggle("active", b.dataset.view===state.comerView));
  renderChips(); renderFoodList(); renderRecipeList();
}

/* =================================================================
   RENDER — DIARIO
   ================================================================= */
function diaryTotals(){
  const t={kcal:0,prot:0,carb:0,gras:0};
  MEALS.forEach(m=>{
    state.diary.meals[m.k].forEach(f=>{ t.kcal+=f.kcal; t.prot+=f.prot; t.carb+=f.carb; t.gras+=f.gras; });
  });
  return t;
}
function renderDiario(){
  document.getElementById("diary-date-sub").textContent = "Hoy, " + fmtDate();
  const t=diaryTotals();
  document.getElementById("d-kcal").textContent = Math.round(t.kcal);
  document.getElementById("d-prot").textContent = round1(t.prot)+"g";
  document.getElementById("d-carb").textContent = round1(t.carb)+"g";
  document.getElementById("d-gras").textContent = round1(t.gras)+"g";

  const wrap=document.getElementById("meals-wrap");
  wrap.innerHTML = MEALS.map(m=>{
    const items=state.diary.meals[m.k];
    const kcal=items.reduce((s,f)=>s+f.kcal,0);
    const rows = items.length===0
      ? `<div class="empty-note" style="padding:10px 0;">Nada registrado aún</div>`
      : items.map(f=>`
        <div class="diary-item">
          <div class="info"><b>${esc(f.name)}</b><span>${esc(f.por)} · ${f.time}</span></div>
          <span class="kc">${f.kcal} kcal</span>
          <button class="rm-btn" data-meal="${m.k}" data-id="${f.id}">✕</button>
        </div>`).join("");
    return `<div class="meal-block">
      <div class="meal-head"><b>${m.e} ${m.l}</b><span>${kcal>0?Math.round(kcal)+' kcal':''}</span></div>
      ${rows}
    </div>`;
  }).join("");

  const goal = state.settings.waterGoal || 8;
  const pct = Math.min(state.diary.water/goal, 1);
  const r=38, c=2*Math.PI*r;
  const ring = document.getElementById("water-ring-fg");
  ring.setAttribute("stroke-dasharray", c.toFixed(2));
  ring.setAttribute("stroke-dashoffset", (c*(1-pct)).toFixed(2));
  document.getElementById("water-ring-num").textContent = state.diary.water;
  document.getElementById("water-ring-goal").textContent = "de "+goal;
  const wn=document.getElementById("water-note");
  if(state.diary.water===0) wn.textContent="Cada vaso cuenta 💧";
  else if(state.diary.water<goal) wn.textContent="Vas muy bien, sigue así 💛";
  else wn.textContent="¡Excelente hidratación hoy! 🌿";

  const mr=document.getElementById("mood-row");
  mr.innerHTML = MOODS.map(m=>
    `<button class="mood-btn ${state.diary.mood===m.l?'sel':''}" data-mood="${esc(m.l)}">${m.e}<span>${esc(m.l)}</span></button>`
  ).join("");
}

/* =================================================================
   RENDER — PROGRESO
   ================================================================= */
function renderProgreso(){
  const dates=last7Dates();
  const days=dates.map(d=>({date:d, data: d===state.today ? state.diary : (sGet("diary:"+d) || {meals:{desayuno:[],comida:[],cena:[],snack:[]},water:0,mood:null})}));

  const maxWater = Math.max(state.settings.waterGoal, ...days.map(d=>d.data.water||0), 1);
  const waterBars=document.getElementById("water-bars");
  waterBars.innerHTML = days.map(d=>{
    const w=d.data.water||0;
    const h=Math.round((w/maxWater)*90)+ (w>0?4:0);
    return `<div class="bar-col"><div class="bar" style="height:${h}px"></div><div class="bar-lbl">${dayLabel(d.date)}</div></div>`;
  }).join("");

  const kcalOf = dd => { let s=0; if(dd.meals){ MEALS.forEach(m=> (dd.meals[m.k]||[]).forEach(f=>s+=f.kcal)); } return s; };
  const maxKcal = Math.max(...days.map(d=>kcalOf(d.data)), 500);
  const kcalBars=document.getElementById("kcal-bars");
  kcalBars.innerHTML = days.map(d=>{
    const k=kcalOf(d.data);
    const h=Math.round((k/maxKcal)*90)+(k>0?4:0);
    return `<div class="bar-col"><div class="bar" style="height:${h}px"></div><div class="bar-lbl">${dayLabel(d.date)}</div></div>`;
  }).join("");

  const moodStrip=document.getElementById("mood-strip");
  moodStrip.innerHTML = days.map(d=>{
    const mo = MOODS.find(m=>m.l===d.data.mood);
    return `<div class="m">${mo?mo.e:'·'}</div>`;
  }).join("");

  const unlocked = sGet("unlocked-achievements") || [];
  const achGrid=document.getElementById("ach-grid");
  achGrid.innerHTML = ACHIEVEMENTS.map(a=>{
    const u = unlocked.indexOf(a.id)!==-1;
    return `<div class="ach ${u?'unlocked':''}" title="${esc(a.d)}"><span class="e">${a.e}</span><span class="l">${esc(a.l)}</span></div>`;
  }).join("");
  document.getElementById("ach-count").textContent = unlocked.length+" de "+ACHIEVEMENTS.length+" logros";
}

/* =================================================================
   RENDER — ANIMO
   ================================================================= */
function renderNovio(){ document.getElementById("novio-msg").textContent = NOVIO_MSGS[state.novioIdx]; }
function renderMsgList(){
  const list=document.getElementById("msg-list");
  const msgs=allMessages();
  list.innerHTML = msgs.map(m=>{
    const isFav = state.favorites.includes(m);
    return `<div class="msg-list-item"><p>${esc(m)}</p><button class="fav-btn" data-msg="${esc(m)}">${isFav?'❤️':'🤍'}</button></div>`;
  }).join("");
}
function renderAnimo(){ renderNovio(); renderMsgList(); }

function renderAll(){ renderInicio(); renderComer(); renderDiario(); renderProgreso(); renderAnimo(); }

/* =================================================================
   MODALES
   ================================================================= */
function openModal(id){
  document.getElementById("overlay").classList.remove("hidden");
  document.querySelectorAll(".modal").forEach(m=>m.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
function closeModal(){ document.getElementById("overlay").classList.add("hidden"); }

function openFoodDetail(idx){
  const f=allFoods()[idx];
  if(!f) return;
  state.currentAddItem = {name:f.name, por:f.por, kcal:f.kcal, prot:f.prot, carb:f.carb, gras:f.gras, fib:f.fib};
  state.currentAddIsRecipe = false;
  fillFoodModal(f.name, "Por "+f.por, f, true);
}
function openRecipeDetail(idx){
  const r=RECIPES[idx];
  if(!r) return;
  state.currentAddItem = {name:r.name, por:"1 porción", kcal:r.kcal, prot:r.prot, carb:r.carb, gras:r.gras, fib:0};
  state.currentAddIsRecipe = true;
  fillFoodModal(r.name, "1 porción de la receta", r, false);
}
function fillFoodModal(name, portionTxt, vals, showFib){
  document.getElementById("mf-name").textContent = name;
  document.getElementById("mf-portion").textContent = portionTxt;
  document.getElementById("mf-kcal").textContent = vals.kcal;
  document.getElementById("mf-prot").textContent = round1(vals.prot)+"g";
  document.getElementById("mf-carb").textContent = round1(vals.carb)+"g";
  document.getElementById("mf-gras").textContent = round1(vals.gras)+"g";
  document.getElementById("mf-fib-box").style.display = showFib ? "block":"none";
  if(showFib) document.getElementById("mf-fib").textContent = round1(vals.fib||0)+"g";
  state.pendingMealSlot = guessMeal();
  renderMealPick();
  openModal("modal-food");
}
function renderMealPick(){
  const wrap=document.getElementById("meal-pick");
  wrap.innerHTML = MEALS.map(m=>
    `<button class="${state.pendingMealSlot===m.k?'sel':''}" data-meal="${m.k}">${m.e} ${m.l}</button>`
  ).join("");
}

/* =================================================================
   ACCIONES
   ================================================================= */
function addCurrentToDiary(){
  const item = state.currentAddItem;
  if(!item) return;
  const meal = state.pendingMealSlot;
  state.diary.meals[meal].push({
    id: Date.now()+Math.random().toString(36).slice(2,7),
    name:item.name, por:item.por, kcal:item.kcal, prot:item.prot, carb:item.carb, gras:item.gras, time:nowTime()
  });
  saveDiary();
  state.stats.totalFoods++;
  if(state.currentAddIsRecipe) state.stats.recipesTried++;
  sSet("stats", state.stats);
  renderDiario(); renderInicio();
  showToast("¡Agregado a tu diario! 🎉");
  ding();
  checkAchievements();
  renderProgreso();
}
function removeFoodFromDiary(meal, id){
  state.diary.meals[meal] = state.diary.meals[meal].filter(f=>f.id!==id);
  saveDiary();
  renderDiario(); renderInicio(); renderProgreso();
}
function changeWater(delta){
  const goal = state.settings.waterGoal || 8;
  const before = state.diary.water;
  state.diary.water = Math.max(0, state.diary.water+delta);
  saveDiary();
  if(before<goal && state.diary.water>=goal){
    state.stats.waterGoalHit = true;
    sSet("stats", state.stats);
    confettiBurst(); chime();
  } else if(delta>0){ ding(); }
  renderDiario(); renderInicio();
  checkAchievements();
  renderProgreso();
}
function setMood(label){
  state.diary.mood = state.diary.mood===label ? null : label;
  saveDiary();
  renderDiario(); renderInicio();
}
function saveJournalText(){
  state.diary.journal = document.getElementById("journal-input").value;
  saveDiary();
  if(state.diary.journal.trim() && state.stats.totalJournal===0){
    state.stats.totalJournal = 1; sSet("stats", state.stats); checkAchievements();
  } else if(state.diary.journal.trim()){
    state.stats.totalJournal++; sSet("stats", state.stats);
  }
  flashSaved("journal-saved");
}
function saveReasonsText(){
  state.reasons = document.getElementById("reasons-input").value;
  sSet("reasons", state.reasons);
  if(state.reasons.trim() && !state.stats.firstReasons){
    state.stats.firstReasons = true; sSet("stats", state.stats); checkAchievements(); renderProgreso();
  }
  flashSaved("reasons-saved");
}
function flashSaved(id){
  const el=document.getElementById(id);
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),1800);
}
function toggleFavorite(msg){
  if(state.favorites.includes(msg)){
    state.favorites = state.favorites.filter(m=>m!==msg);
  }else{
    state.favorites.push(msg);
    if(!state.stats.firstFavorite){ state.stats.firstFavorite=true; sSet("stats", state.stats); checkAchievements(); renderProgreso(); }
  }
  sSet("favorites", state.favorites);
  renderMsgList();
}
function addCustomMessage(text){
  text=text.trim();
  if(!text) return;
  state.customMsgs.push(text);
  sSet("custom-messages", state.customMsgs);
  renderMsgList();
  showToast("Mensaje agregado 💛");
}
function addCustomFood(food){
  state.customFoods.push(food);
  sSet("custom-foods", state.customFoods);
  renderComer();
  showToast("Alimento agregado 🍽");
}
function saveSettings(){
  sSet("settings", state.settings);
  renderDiario(); renderProgreso();
}

/* =================================================================
   NAVEGACIÓN
   ================================================================= */
function switchTab(tab){
  state.activeTab=tab;
  document.querySelectorAll(".tab-panel").forEach(p=>p.classList.remove("active"));
  document.getElementById("tab-"+tab).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=> b.classList.toggle("active", b.dataset.tab===tab));
  window.scrollTo(0,0);
  if(tab==="progreso") renderProgreso();
}

/* =================================================================
   SERVICE WORKER (para funcionar sin internet una vez instalada)
   ================================================================= */
function registerSW(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", ()=>{
      navigator.serviceWorker.register("sw.js").catch(()=>{});
    });
  }
}

/* =================================================================
   EVENTOS
   ================================================================= */
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click",()=>switchTab(btn.dataset.tab));
});
document.querySelectorAll("[data-goto]").forEach(el=>{
  el.addEventListener("click",()=>switchTab(el.dataset.goto));
});

document.getElementById("btn-new-msg").addEventListener("click",()=>{
  document.getElementById("hero-msg").textContent = pickHeroMsg();
});
document.getElementById("btn-fav-hero").addEventListener("click",()=>{
  const msg = allMessages()[state.heroMsgIdx];
  toggleFavorite(msg);
  showToast(state.favorites.includes(msg) ? "Guardado en tus favoritos ❤️" : "Quitado de favoritos");
});

document.getElementById("search-input").addEventListener("input",(e)=>{
  state.search = e.target.value;
  renderFoodList();
});
document.getElementById("chip-row").addEventListener("click",(e)=>{
  const chip=e.target.closest(".chip");
  if(!chip) return;
  state.activeCat = chip.dataset.cat;
  renderChips(); renderFoodList();
});
document.getElementById("food-list").addEventListener("click",(e)=>{
  const row=e.target.closest(".food-row");
  if(!row) return;
  openFoodDetail(+row.dataset.idx);
});
document.getElementById("recipe-list").addEventListener("click",(e)=>{
  const btn=e.target.closest(".recipe-add");
  if(btn){ openRecipeDetail(+btn.dataset.idx); return; }
  const card=e.target.closest(".recipe-card");
  if(card){ openRecipeDetail(+card.dataset.idx); }
});
document.querySelectorAll(".toggle-btn").forEach(b=>{
  b.addEventListener("click",()=>{ state.comerView=b.dataset.view; renderComer(); });
});
document.getElementById("meal-pick").addEventListener("click",(e)=>{
  const btn=e.target.closest("button");
  if(!btn) return;
  state.pendingMealSlot = btn.dataset.meal;
  renderMealPick();
});
document.getElementById("mf-add").addEventListener("click",()=>{ addCurrentToDiary(); closeModal(); });
document.getElementById("mf-close").addEventListener("click",closeModal);

document.getElementById("btn-add-custom-food").addEventListener("click",()=>{
  ["cf-name","cf-portion","cf-kcal","cf-prot","cf-carb","cf-gras","cf-fib"].forEach(id=>{ document.getElementById(id).value=""; });
  openModal("modal-custom-food");
});
document.getElementById("cf-close").addEventListener("click",closeModal);
document.getElementById("cf-save").addEventListener("click",()=>{
  const name=document.getElementById("cf-name").value.trim();
  if(!name){ showToast("Ponle un nombre al alimento"); return; }
  const food={
    name, cat:"Personalizados",
    por: document.getElementById("cf-portion").value.trim() || "1 porción",
    kcal: parseFloat(document.getElementById("cf-kcal").value)||0,
    prot: parseFloat(document.getElementById("cf-prot").value)||0,
    carb: parseFloat(document.getElementById("cf-carb").value)||0,
    gras: parseFloat(document.getElementById("cf-gras").value)||0,
    fib: parseFloat(document.getElementById("cf-fib").value)||0
  };
  addCustomFood(food);
  closeModal();
});

document.getElementById("meals-wrap").addEventListener("click",(e)=>{
  const btn=e.target.closest(".rm-btn");
  if(!btn) return;
  removeFoodFromDiary(btn.dataset.meal, btn.dataset.id);
});
document.getElementById("water-plus").addEventListener("click",()=>changeWater(1));
document.getElementById("water-minus").addEventListener("click",()=>changeWater(-1));
document.getElementById("mood-row").addEventListener("click",(e)=>{
  const btn=e.target.closest(".mood-btn");
  if(!btn) return;
  setMood(btn.dataset.mood);
});
document.getElementById("btn-save-journal").addEventListener("click",saveJournalText);
document.getElementById("btn-save-reasons").addEventListener("click",saveReasonsText);

document.getElementById("novio-prev").addEventListener("click",()=>{
  state.novioIdx=(state.novioIdx-1+NOVIO_MSGS.length)%NOVIO_MSGS.length; renderNovio();
});
document.getElementById("novio-next").addEventListener("click",()=>{
  state.novioIdx=(state.novioIdx+1)%NOVIO_MSGS.length; renderNovio();
});
document.getElementById("msg-list").addEventListener("click",(e)=>{
  const btn=e.target.closest(".fav-btn");
  if(!btn) return;
  toggleFavorite(btn.dataset.msg);
});
document.getElementById("btn-add-msg").addEventListener("click",()=>{
  const ta=document.getElementById("custom-msg-input");
  addCustomMessage(ta.value);
  ta.value="";
});

document.getElementById("welcome-start").addEventListener("click",()=>{
  sSet("onboarding-seen", true);
  closeModal();
});
document.getElementById("overlay").addEventListener("click",(e)=>{
  if(e.target.id==="overlay"){ closeModal(); }
});

/* settings */
document.getElementById("gear-btn").addEventListener("click",()=>openModal("modal-settings"));
document.getElementById("settings-close").addEventListener("click",closeModal);
document.getElementById("set-water-goal").addEventListener("change",(e)=>{
  let v=parseInt(e.target.value)||8;
  v=Math.max(1,Math.min(20,v));
  e.target.value=v;
  state.settings.waterGoal=v;
  saveSettings();
});
document.getElementById("set-sound").addEventListener("click",(e)=>{
  state.settings.sound = !state.settings.sound;
  e.target.classList.toggle("on", state.settings.sound);
  saveSettings();
  if(state.settings.sound) ding();
});
let resetArmed=false;
document.getElementById("btn-reset").addEventListener("click",(e)=>{
  if(!resetArmed){
    resetArmed=true;
    e.target.textContent="¿Seguro? Toca de nuevo para borrar todo";
    setTimeout(()=>{ resetArmed=false; e.target.textContent="Reiniciar todos los datos"; },4000);
  }else{
    Object.keys(localStorage).forEach(k=>{ if(k.startsWith("meli:")) localStorage.removeItem(k); });
    location.reload();
  }
});

/* =================================================================
   INICIO
   ================================================================= */
loadAll();
