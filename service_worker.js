let cache_name = 'v1';

//
//	Listen to the Install event and when this happens add the files to the
//	cash.
//
self.addEventListener('install', function(event) {

	//
	//	1.	All the assets that needs cashing
	//
	let assets = [
		'./',
		'./index.html',
		'./assets/browserconfig.xml',
		'./assets/css/animate.css',
		'./assets/css/bootstrap.min.css',
		'./assets/css/flexslider.css',
		'./assets/css/font-awesome.min.css',
		'./assets/css/simpletextrotator.css',
		'./assets/css/style.css',
		'./assets/fonts/FontAwesome.otf',
		'./assets/fonts/fontawesome-webfont.eot',
		'./assets/fonts/fontawesome-webfont.svg',
		'./assets/fonts/fontawesome-webfont.ttf',
		'./assets/fonts/fontawesome-webfont.woff',
		'./assets/fonts/fontawesome-webfont.woff2',
		'./assets/fonts/glyphicons-halflings-regular.eot',
		'./assets/fonts/glyphicons-halflings-regular.svg',
		'./assets/fonts/glyphicons-halflings-regular.ttf',
		'./assets/fonts/glyphicons-halflings-regular.woff',
		'./assets/img/articles/article1@2x.jpg',
		'./assets/img/articles/article1.jpg',
		'./assets/img/articles/article2@2x.jpg',
		'./assets/img/articles/article2.jpg',
		'./assets/img/articles/article3@2x.jpg',
		'./assets/img/articles/article3.jpg',
		'./assets/img/articles/article4@2x.jpg',
		'./assets/img/articles/article4.jpg',
		'./assets/img/articles/article5@2x.jpg',
		'./assets/img/articles/article5.jpg',
		'./assets/img/articles/article6@2x.jpg',
		'./assets/img/articles/article6.jpg',
		'./assets/img/books/book1.jpg',
		'./assets/img/books/book2.jpg',
		'./assets/img/books/book3.jpg',
		'./assets/img/favicons/android-chrome-144x144.png',
		'./assets/img/favicons/android-chrome-192x192.png',
		'./assets/img/favicons/android-chrome-256x256.png',
		'./assets/img/favicons/android-chrome-36x36.png',
		'./assets/img/favicons/android-chrome-384x384.png',
		'./assets/img/favicons/android-chrome-48x48.png',
		'./assets/img/favicons/android-chrome-512x512.png',
		'./assets/img/favicons/android-chrome-72x72.png',
		'./assets/img/favicons/android-chrome-96x96.png',
		'./assets/img/favicons/apple-touch-icon-114x114.png',
		'./assets/img/favicons/apple-touch-icon-114x114-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-120x120.png',
		'./assets/img/favicons/apple-touch-icon-120x120-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-144x144.png',
		'./assets/img/favicons/apple-touch-icon-144x144-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-152x152.png',
		'./assets/img/favicons/apple-touch-icon-152x152-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-180x180.png',
		'./assets/img/favicons/apple-touch-icon-180x180-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-57x57.png',
		'./assets/img/favicons/apple-touch-icon-57x57-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-60x60.png',
		'./assets/img/favicons/apple-touch-icon-60x60-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-72x72.png',
		'./assets/img/favicons/apple-touch-icon-72x72-precomposed.png',
		'./assets/img/favicons/apple-touch-icon-76x76.png',
		'./assets/img/favicons/apple-touch-icon-76x76-precomposed.png',
		'./assets/img/favicons/apple-touch-icon.png',
		'./assets/img/favicons/apple-touch-icon-precomposed.png',
		'./assets/img/favicons/favicon-16x16.png',
		'./assets/img/favicons/favicon-32x32.png',
		'./assets/img/favicons/mstile-144x144.png',
		'./assets/img/favicons/mstile-150x150.png',
		'./assets/img/favicons/mstile-310x150.png',
		'./assets/img/favicons/mstile-310x310.png',
		'./assets/img/favicons/mstile-70x70.png',
		'./assets/img/favicons/safari-pinned-tab.svg',
		'./assets/img/h1-bg@2x.png',
		'./assets/img/h1-bg.png',
		'./assets/img/header-bg@2x.jpg',
		'./assets/img/header-bg.jpg',
		'./assets/img/newsletter/newsletter1@2x.jpg',
		'./assets/img/newsletter/newsletter1.jpg',
		'./assets/img/newsletter/newsletter2@2x.jpg',
		'./assets/img/newsletter/newsletter2.jpg',
		'./assets/img/og/og-image.jpg',
		'./assets/img/sabina_gatti.jpg',
		'./assets/img/topics/topic1@2x.png',
		'./assets/img/topics/topic1.png',
		'./assets/img/topics/topic2@2x.png',
		'./assets/img/topics/topic2.png',
		'./assets/js/bootstrap.min.js',
		'./assets/js/classie.js',
		'./assets/js/email.js',
		'./assets/js/jquery.flexslider.js',
		'./assets/js/jquery.min.js',
		'./assets/js/jquery.simple-text-rotator.js',
		'./assets/js/modernizr.js',
		'./assets/js/newsletter.js',
		'./assets/js/script.js',
		'./assets/js/waypoints.min.js',
		'./assets/manifest.json'
	];

	//
	//	2.	Set the promise chain in a clear variable which will help
	//		us more easily reason about the code
	//
	let add_assets = caches.open(cache_name)
		.then(function(cache) {

			return cache.addAll(assets);

		}).catch(function(error) {

			console.log(error)

		});

	//
	//	3.	Tell the event to wait until we finish
	//
	event.waitUntil(add_assets);

});

//
//	Listen to events that run the Worker
//
self.addEventListener('activate', function(event) {

	//
	//	1.	Make a clear variable to help us have more clear code
	//
	let delete_action = caches.keys()
		.then(function(cacheNames) {

			//
			//	1.	Loop over each element
			//
			return Promise.all(cacheNames.map(function(thisCacheName) {

				//
				//	1.	If a cached item is saved under a previous cacheName
				//
				if(thisCacheName !== cache_name)
				{
					//
					//	->	Delete that cached file
					//
					return caches.delete(thisCacheName);
				}

			}));

		});

	//
	//	2.	Tell the event to wait until we finish
	//
	event.waitUntil(delete_action);

});

//
//	Listen to Fetch events which happens when the browser wants to make a
//	resource request, this way we can intercept this action and provide the
//	browser the requested file from the cash if they re there.
//
self.addEventListener('fetch', function(event) {

	//
	//	1. 	Save the promises in a clear variable which will help us better
	//		see the code.
	//
	let fetch_data = caches
		.match(event.request)
		.then(function(response) {

			//
			//	1.	If the request is in the cache
			//
			if(response)
			{
				//
				//	Return the cached version
				//
				return response;
			}

			//
			// 2.	IMPORTANT: Clone the request. A request is a stream and
			// 		can only be consumed once. Since we are consuming this
			// 		once by cache and once by the browser for fetch, we need
			// 		to clone the response.
			//
			let requestClone = event.request.clone();

			//
			//	3.	Fetch data that is not in the cash and ask the Internet
			//		for it.
			//
			fetch(requestClone)
			.then(function(response) {

				//
				//	1.	Check if there was a response from Fetch
				//
				if(!response)
				{
					return response;
				}

				//
				//	2.	Clone the response which is a stream
				//
				let responseClone = response.clone();

				//
				//	3.	Open the cache
				//
				caches.open(cache_name).then(function(cache) {

					//
					//	1.	Put the fetched response in the cache
					//
					cache.put(event.request, responseClone);

					//
					//	->	Return the response
					//
					return response;

				});

			})
			.catch(function(error) {

				//
				//	->	Log if there was an error
				//
				console.log('Error Fetching & Caching New Data', error);

			});

		});

	//
	//	2.	Tell the event to wait until we finish
	//
	event.respondWith(fetch_data);

});