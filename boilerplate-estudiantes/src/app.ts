import express, { NextFunction, Request, Response } from 'express';
import path from 'node:path';
import indexRoutes from './routes';
import categoriaRoute from './routes/categorias.route';
import adminRoute from './routes/admin.route';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd(), 'src/views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(process.cwd(), 'src/public')));


app.use('/', indexRoutes);

app.use('/categorias', categoriaRoute);

/*
  RUTA crear-conducotres -> /sistema-radio-taxi/crear-conductor
*/
app.use('/sistema-radio-taxi', adminRoute);

app.use((_req: Request, res: Response) => {
  res.status(404).render('errors/404', {
    title: 'Página no encontrada'
  });
});

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);

  res.status(500).render('errors/500', {
    title: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? error : null
  });
});



export default app;
