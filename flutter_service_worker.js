'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/cards/01_pi_1.webp": "1ce230aa8020ad16c8e8c87f1664b7d1",
"assets/assets/cards/09_yeol.webp": "21fa44a452ab43d0f6ad7bec3aa687f1",
"assets/assets/cards/06_pi_1.webp": "fa3cdf9b245a309f82a7a9c91931caaa",
"assets/assets/cards/06_yeol.webp": "fd7b0b940ddc05d579d34e5268f5e133",
"assets/assets/cards/gwangBak.mp3": "c891ba0d1a756f4d432d074ec0d0013d",
"assets/assets/cards/07_chodan.webp": "dbbbf403f1c145313345fd975077d70d",
"assets/assets/cards/09_pi_1.webp": "9864a1110fb1dbc17388ad74a2a9b8d3",
"assets/assets/cards/card_back_03.webp": "947babe180915b348929ca9fafc0c68f",
"assets/assets/cards/11_pi_1.webp": "eb9b52df3feb89654e1388ce6144bf0a",
"assets/assets/cards/02_pi_2.webp": "47e3734c4939b7e184a4a5eb573f7434",
"assets/assets/cards/card_back_05.webp": "2acf02bdf80a69b0bb0b25dd12bb25c0",
"assets/assets/cards/06_chungdan.webp": "04d30b7c797b996b7e181330c83eb9f0",
"assets/assets/cards/12_chodan.webp": "13e1fb3f405605b4b232aaba8dd82ea9",
"assets/assets/cards/12_gwang.webp": "78acd72e42b096660062af65d2c47403",
"assets/assets/cards/card_back_04.webp": "6edf063c4ed0e530a4d31f9e3b34e305",
"assets/assets/cards/02_pi_1.webp": "d0780ded89842942331dc2d79c93a108",
"assets/assets/cards/cardPlace.mp3": "dccc6ed87dc6243b617d2dc8044350bf",
"assets/assets/cards/card_back_02.webp": "5329a179610ddd123e5fbfd42f8480da",
"assets/assets/cards/gostopLose.mp3": "51f973471adcb89784fa8c350da6320e",
"assets/assets/cards/04_pi_1.webp": "5a8fd33c33f0b149fed52636ee84a66f",
"assets/assets/cards/piBak.mp3": "c891ba0d1a756f4d432d074ec0d0013d",
"assets/assets/cards/bonus.mp3": "dde1c858d9aac4f90660e1fa8016ccd7",
"assets/assets/cards/05_chodan.webp": "5a9767a0c2791e61930716745d05e7ca",
"assets/assets/cards/04_yeol.webp": "81390cf466ff97baf275a2acedca6ade",
"assets/assets/cards/08_gwang.webp": "929f6f2dd25c48061d1575baffe169c2",
"assets/assets/cards/callStop.mp3": "416ae273dabc0587d9842bf79bdf2c5d",
"assets/assets/cards/05_pi_2.webp": "b05277c7ee53e29a0b111b00c3f98ee2",
"assets/assets/cards/10_pi_1.webp": "e547315b5c7375138eb48dac35e883e5",
"assets/assets/cards/07_pi_1.webp": "f6f56c590471101874179c7c5e7879c7",
"assets/assets/cards/06_pi_2.webp": "601efcbe9b4a64e9c36ade32da4421be",
"assets/assets/cards/cards_shuffle.mp3": "d04d4c023e34a42f91edbc74912b3d48",
"assets/assets/cards/03_pi_2.webp": "e3309bac90ff9f1af02b1e7ddf78de69",
"assets/assets/cards/card_back_07.webp": "82005524a819d36882335403a6f14d96",
"assets/assets/cards/01_pi_2.webp": "1d41234ca2c4db932d5b2bd17b560058",
"assets/assets/cards/10_chungdan.webp": "b18448d9d27e52bc196afc46f0f5ace0",
"assets/assets/cards/08_pi_1.webp": "ee744cd7dc7c4a0d6e2fe9ae4c9a7614",
"assets/assets/cards/11_gwang.webp": "f5992c91b3d686ccbd4ac5e4dcbf19f4",
"assets/assets/cards/04_pi_2.webp": "f9719a5c7cc52e3ee4ef501491f78eec",
"assets/assets/cards/12_pi.webp": "4ab80ef077fbbe43adcb9a5664918602",
"assets/assets/cards/01_hongdan.webp": "ac3b48770b78a2594c487890ad60e143",
"assets/assets/cards/11_pi_2.webp": "5cc9e7a3777fb39281e324b0e46a2661",
"assets/assets/cards/09_pi_2.webp": "96300a4612a50757db414069adc84d44",
"assets/assets/cards/penalty.mp3": "d2095d0a75b915c7372dc0fbce9762e3",
"assets/assets/cards/03_pi_1.webp": "785c44f85bd8060444d54953dac1332a",
"assets/assets/cards/03_gwang.webp": "704cfff2538a41f1ffbfdebe5d9ee775",
"assets/assets/cards/02_yeol.webp": "be6d5fe02b7da845570c163308ff3c51",
"assets/assets/cards/card_back_01.webp": "3ac55156e6e825ebc082ff3acba7a679",
"assets/assets/cards/11_ssangpi.webp": "695a1284a82078e0270695e70e8068ee",
"assets/assets/cards/10_yeol.webp": "424a16b120f37f1e6fb16c0a3ac8fa0e",
"assets/assets/cards/09_chungdan.webp": "850a284db8e2583e180b242e4bcbb163",
"assets/assets/cards/05_yeol.webp": "8dcddb17705cab14375b0b873e98ee42",
"assets/assets/cards/01_gwang.webp": "86e6b3421ef6e31f422960d9bf2a1352",
"assets/assets/cards/05_pi_1.webp": "ab4225eb254de9e0360675a5da193671",
"assets/assets/cards/03_hongdan.webp": "2712c5a2b4f5fd9fd251aeb03d50278f",
"assets/assets/cards/08_yeol.webp": "6e4738e367e445b6a84c6783cd68b351",
"assets/assets/cards/scoreGain.mp3": "e614ed3ab89cf7ff7a4a372f4fc00edb",
"assets/assets/cards/07_yeol.webp": "25426452705e15074a2edb801db7a6ee",
"assets/assets/cards/gostopWin.mp3": "146132137285ea9649635e5e3a9e9ecf",
"assets/assets/cards/card_flip.mp3": "7e188ddf73629c1557d8339227de19ad",
"assets/assets/cards/07_pi_2.webp": "db06226200f13c6a269bebe5bea3e939",
"assets/assets/cards/card_back_06.webp": "60fbf3aabfc41058b12c789823361f7c",
"assets/assets/cards/02_hongdan.webp": "f2322827f3bf0c337f4048a2866166ea",
"assets/assets/cards/10_pi_2.webp": "a0b8a83f82055767087a66bc6c7a6c94",
"assets/assets/cards/08_pi_2.webp": "08427b7e9af4d59ce171d4ba6f4990d0",
"assets/assets/cards/04_chodan.webp": "4e43390cf7583176190b598fd24d4662",
"assets/assets/cards/callGo.mp3": "9f30b5ce1fed6543d899e44cc616fbae",
"assets/assets/cards/12_yeol.webp": "e2f22191e4f8fc9e86799051d61819aa",
"assets/assets/sounds/itemActivate.mp3": "e614ed3ab89cf7ff7a4a372f4fc00edb",
"assets/assets/sounds/heal.mp3": "dde1c858d9aac4f90660e1fa8016ccd7",
"assets/assets/sounds/nomal-nya.mp3": "ddf33a54ab78d01e2c98ea6e2ae79d90",
"assets/assets/sounds/roundLose.mp3": "1f3ef59787c89d3aa4a74de2af63be6a",
"assets/assets/sounds/defeat02.mp3": "a2b8d237c8a60bee6e1b58e57594358e",
"assets/assets/sounds/kid-nya.mp3": "ab09e021f9a5db2a709a783e73bbc5a1",
"assets/assets/sounds/mew-nya.mp3": "416ae273dabc0587d9842bf79bdf2c5d",
"assets/assets/sounds/dodge.mp3": "7f0974f8377b49516f766a3c592aef75",
"assets/assets/sounds/cardSelect.mp3": "ddf33a54ab78d01e2c98ea6e2ae79d90",
"assets/assets/sounds/defeat.mp3": "51f973471adcb89784fa8c350da6320e",
"assets/assets/sounds/critical.mp3": "41b13e85e869f528ea3c4df4df5c7663",
"assets/assets/sounds/roundWin01.mp3": "9f30b5ce1fed6543d899e44cc616fbae",
"assets/assets/sounds/cute-nya.mp3": "3223e7b763714f14ebf8e82c7aa5a2b3",
"assets/assets/sounds/catHappy.mp3": "ab09e021f9a5db2a709a783e73bbc5a1",
"assets/assets/sounds/catSad.mp3": "12939e70e3f0aa28629f3479c5a238ac",
"assets/assets/sounds/victory.mp3": "0205846e8c6b99cfa28b74d760b75235",
"assets/assets/sounds/catAttack.mp3": "3223e7b763714f14ebf8e82c7aa5a2b3",
"assets/assets/sounds/choiceSelect.mp3": "5863c8a66bd3aceebfd0ea618025aa4d",
"assets/assets/sounds/catDefend.mp3": "416ae273dabc0587d9842bf79bdf2c5d",
"assets/assets/sounds/error.mp3": "d04d4c023e34a42f91edbc74912b3d48",
"assets/assets/sounds/child-nya.mp3": "12939e70e3f0aa28629f3479c5a238ac",
"assets/assets/sounds/angry-nya.mp3": "cd5a6c8c57904f4afb8dd8722e47bf97",
"assets/assets/sounds/warning.mp3": "bde6bacde6814e3aea6188f1a62e42ef",
"assets/assets/sounds/roundWin.mp3": "146132137285ea9649635e5e3a9e9ecf",
"assets/assets/sounds/roundDraw.mp3": "d2095d0a75b915c7372dc0fbce9762e3",
"assets/assets/translations/en-US.json": "a95b4d3c277c11dff23969b8b00f9ba8",
"assets/assets/translations/ja-JP.json": "9223417409d063a0c386ce1a46b26895",
"assets/assets/translations/ko-KR.json": "c90e9001796364f39622622b68b913fc",
"assets/assets/translations/es-ES-modified.json": "166e6e42241cde984c02f3a593d5453d",
"assets/assets/translations/en-US-modified.json": "bfca03e7745b7352808b69bf446e27ea",
"assets/assets/translations/ko-KR-modified.json": "27fa4a24ddcdf4e5b40f0fbe23c52699",
"assets/assets/translations/ja-JP-modified.json": "d3161e6d24aa88b747ae16c5f357ba60",
"assets/assets/translations/es-ES.json": "166e6e42241cde984c02f3a593d5453d",
"assets/assets/images/logo-33.webp": "a29c1386bd82713433b84dbf75ba948c",
"assets/assets/images/logo-44.webp": "c3776afca48fd364cd17ea89e02b19b2",
"assets/assets/images/logo-5.webp": "81390cf466ff97baf275a2acedca6ade",
"assets/assets/images/logo-11.webp": "8816c2487a727ea736c4fc50002a3bec",
"assets/assets/images/logo-3.webp": "b4dfa0decaeb2c910e462a2154b8f1e8",
"assets/assets/images/logo-22.webp": "c2fbab8518d8b0b1fe75fe68593c4bd2",
"assets/assets/images/logo-1.webp": "86e6b3421ef6e31f422960d9bf2a1352",
"assets/assets/images/logo-4.webp": "00cf9c763605b56909a3ed37b56e2b32",
"assets/assets/images/logo-2.webp": "978f6762ff9300979466964dbfad249e",
"assets/assets/images/logo-00.webp": "d2d7e282fa691fda725973e44d5d5030",
"assets/assets/images/logo-55.webp": "40e3993e7dd8095d1bb427ce9ea70d22",
"assets/assets/images/logo-0.webp": "2b24e1b8c1e8e87f06b7daff4273c917",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "81a3ef81cd2df481cc5a3d88787b5aba",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "28aaa546010ac76ef4b8faca9553a2f8",
"assets/assets/fonts/SF-Pro-Display-Black.otf": "b247afac3b7f43c19afeeaf47452b5f4",
"assets/assets/fonts/SF-Pro-Rounded-Thin.otf": "a2d7a2d85d5c9ed03a4a0caba3c31092",
"assets/assets/fonts/SF-Pro-Rounded-Regular.otf": "ec291aca4b77bfc9b2b095c76539753b",
"assets/assets/fonts/SF-Pro-Rounded-Bold.otf": "71552fd03594131c3f9a23e7efd10b86",
"assets/assets/fonts/SF-Pro-Display-Thin.otf": "c9abcdb6725d44ad5886e1b8eacef7e9",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "1872e1590c4d1ac402784f7c9240efe4",
"assets/assets/fonts/SF-Pro-Rounded-Medium.otf": "f1b4509f2957e6b917fe736e293c207a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "1ea76f1d985c262047c24dded6009764",
"assets/assets/fonts/SF-Pro-Rounded-Black.otf": "3d2f163668fa2aed59a31565bb49c88b",
"assets/assets/fonts/SF-Pro-Rounded-Semibold.otf": "7bb22a25d3bd53d651a408a6ee8a9e31",
"assets/NOTICES": "75cfe9e94a0d8d976281e7dffa029300",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin.json": "5a59d76d09a0df0a0a8606bf85afec23",
"assets/fonts/MaterialIcons-Regular.otf": "85735c12bf7f6cc830684b6a7e3c89c0",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ec91572357e2872e5eea6dfb5eb974ce",
"assets/FontManifest.json": "9a3bafccd3f2729f73969b693fc70a48",
"index.html": "f6a7fcda857a103559b6094fe5415092",
"/": "f6a7fcda857a103559b6094fe5415092",
"manifest.json": "9387d3b4b80e1f631127ebb7063c0ebb",
"flutter_bootstrap.js": "9195060460a3f9e178616428cdaf99f3",
"main.dart.js": "13c94b7e331796690809283f841b287f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"version.json": "0e8443fec7e1d99b3de7127bf74d47ed",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
