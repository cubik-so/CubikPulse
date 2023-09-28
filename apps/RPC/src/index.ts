interface Env {
	CORS_ALLOW_ORIGIN: string;
	URL1: string;
	URL2: string;
}

let currentIndex: number = 0;

export default {
	async fetch(request: Request, env: Env) {
		const RPC_URL = [env.URL1, env.URL2];

		const supportedDomains = env.CORS_ALLOW_ORIGIN ? env.CORS_ALLOW_ORIGIN.split(',') : undefined;
		const corsHeaders: Record<string, string> = {
			'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
			'Access-Control-Allow-Headers': '*',
		};
		if (supportedDomains) {
			const origin = request.headers.get('Origin');
			if (origin && supportedDomains.includes(origin)) {
				corsHeaders['Access-Control-Allow-Origin'] = origin;
			}
		} else {
			corsHeaders['Access-Control-Allow-Origin'] = '*';
		}

		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 200,
				headers: corsHeaders,
			});
		}

		const payload = await request.text();
		const currentRpcUrl = RPC_URL[currentIndex];
		currentIndex = (currentIndex + 1) % RPC_URL.length;

		const proxyRequest = new Request(currentRpcUrl, {
			method: request.method,
			body: payload || null,
			headers: {
				'Content-Type': 'application/json',
				'X-Cubik-Cloudflare-Proxy': 'true',
			},
		});

		return await fetch(proxyRequest).then(res => {
			return new Response(res.body, {
				status: res.status,
				headers: corsHeaders,
			});
		});
	},
};
