// This was the original approach I took for implementing action buttons.

// This idea works when all the action buttons have the same behavior but in this case, some action buttons were NavLink, for router, and some were regular div, for simply calling modal component, or anchor, for external link.

// As a demonstration of my original idea, I'll keep this here

const HOME_SUB_ROUTER = {
  subRouters: [
    { title: "New Game", to: "/game", external: false },
    { title: "Credit", to: "/credit", external: false },
    {
      title: "Exit",
      to: "/exit",
      external: true,
      link: "https://www.seedbox.com/en/"
    }
  ]
}

export default HOME_SUB_ROUTER
