// Essa é uma das formas mais basicas de contrução de rotas, voce cria uma lista de rotas e as define na criação do BrowserRouter, então apenas aplica-o ao provider, que passa a fazer o gerenciamento de rotas.

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Usar o elemente na rota pai de uma rotas aninhadas faz com que esse elemento receba os elementos das rotas filhas como filho(children){Porem atravez do componente Outlet}. Desta forma qualquer rota aninhada a esta sera renderizada atravez de um componente comum, possibilitando a criação de layouts por exemplo.
//     children: [           // Os elements filhos poderam ser acessados no element da rota pai atravez do componet Outlet */
//       { index: true, element: <Inicio /> }, // A propriedade index: true faz com que esse elemento seja renderizado por padrao junto ao elemento pai sem alteração de rota
//       { index: true ,path: "inicio", element: <Inicio /> },
//       {
//         path: "info",
//         children: [
//           { path: "sobre", element: <Sobre /> },
//           { path: "contato", element: <Contato /> },
//         ],
//       },
//     ],
//   },
// ]);



// Uma outra forma de construção é utilizando componentes jsx, a estrutura e propriedades são semelhantes, contudo para essa forma é necessario utilizar o createRoutesFromElements, que basicamente faz oque esta explicito, transforma os elementos jsx em um array de rotas. 
// Essa pode ser uma forma visualmente mais agradavel e intelegivel já que estamos trabalhando com elementos jsx.
// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Inicio />} />
//         <Route path="inicio" element={<Inicio />} />
//         <Route path="/info">
//           <Route path="sobre" element={<Sobre />} />
//           <Route path="contato" element={<Contato />} />
//         </Route>
//       </Route>
//     )
//   );
  
//   createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   );