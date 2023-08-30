import Koa from "koa";
import cors from "@koa/cors";
import Engine from "publicodes";
import { koaMiddleware as publicodesAPI } from "@publicodes/api";
import { readFileSync } from "fs";
import Router from "@koa/router";

// TODO: add versioning
const modelName = "Usage numérique";
const version = "0.1.0";
const modelPath = "modele-numerique.model.json";

const model = JSON.parse(readFileSync(modelPath, "utf-8"));

const app = new Koa();
const router = new Router();

const apiRoutes = publicodesAPI(new Engine(model));

router.use(/* `/${version}`, */ apiRoutes);

router.get("/", (ctx) => {
  ctx.body = `
<h1>API REST du modèle <i>${modelName}</i></h1>

<p>Version: ${version}</p>

<h2>Endpoints</h2>

<ul>
	<li>
		<p>
			<code>POST</code> <code>/evaluate</code> Évalue une ou plusieurs expressions avec une situation donnée
		</p>
		<p>
	</li>
	<li>
		<p>
			<code>GET</code> <code>/rules</code> Retourne la liste de toutes vos règles
		</p>
	</li>
	<li>
		<p>
			<code>GET</code> <code>/rules/{rule}</code> Retourne une règle spécifique
		</p>
	</li>
</ul>

<p>See the <a href="https://publi.codes/docs/api/api-rest">documentation page</a> for more information.</p>
	`;
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
