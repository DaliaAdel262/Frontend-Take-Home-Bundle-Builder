# Bundle Builder

This is my submission for the frontend take-home test, a bundle builder React prototype following Figma design with interactions required such as a multi-step accordion on the left that walks you through picking cameras, a monitoring plan, sensors, and accessories, with a live review panel on the right that keeps a running summary in sync as you go.

Built with:
React 19
TypeScript: Catches runtime errors during development, ensuring code reliability and preventing bugs.
Vite: Delivers faster build times.
Tailwind CSS v4: Offers flexible, rapid styling and keeps the design accurate with minimal effort.
Zustand: Provides lightweight state management with minimal boilerplate and fast performance.
## Running it

```bash
git clone https://github.com/DaliaAdel262/Frontend-Take-Home-Bundle-Builder.git
cd Frontend-Take-Home-Bundle-Builder/bundle-builder
npm install
npm run dev
```

Opens at `http://localhost:5173`.

Other scripts, run from `bundle-builder/`:

```bash
npm run build    # type-checks and builds for production
npm run preview  # serves the production build locally
npm run lint     # eslint
```

## The data

There's no backend, so "the JSON" is a couple of typed TypeScript modules under `src/data/` instead of literal `.json` files. Same idea, just with a schema attached so a typo in a product entry fails at compile time rather than showing up as a blank card in the browser.

**`src/data/productsData.ts`** — one flat array of every product, of type `Product` (defined in `src/types/productType.ts`):

| Field | What it's for |
|---|---|
| `id` | Unique key. Cart items reference products by this instead of copying product data around. |
| `category` | `'camera' \| 'sensor' \| 'accessory' \| 'plan'` — decides which accordion step a product shows up in. |
| `title`, `description` | For display. |
| `learnMoreUrl` | Optional. When present, a "Learn More" link is appended to the description. |
| `image` / `icon` | Most products have a photo; the plan doesn't, so it falls back to an icon glyph. |
| `variants` | Color options, each with its own `id`, `name`, and `image`. Each variant is tracked as its own separate line in the cart, with its own quantity. |
| `billingPeriod` | `'one-time' \| 'monthly'`. Only the plan is monthly, it's shown as "/mo" instead of folding into the one-time total. |
| `price`, `discountedPrice`, `discountBadge` | Pricing, plus the little "save $X" badge shown on discounted items. |
| `isRequired` | `true` only for the Sense Hub. Locks its quantity to exactly 1, can't be removed or added again. |
| `maxQuantity` | Caps how high quantity can go. Used to cap the plan at 1, since it's a subscription, not a stackable product. |

**`src/data/cartData.ts`** — the seed cart the app loads with on a first visit (before anything is saved to `localStorage`), matching the reference design's starting state. It's a `Cart` (`src/types/cartType.ts`), which is really just `{ items: CartItem[] }`. Each `CartItem` is intentionally small:

| Field | What it's for |
|---|---|
| `productId` | Which product this line belongs to — looked up against `productsData.ts` by id. |
| `variantId` | Optional. Picks which color this line represents. A product selected in two colors becomes two separate cart items, each with its own `variantId` and its own quantity. |
| `quantity` | How many of this product/variant combo are in the cart. |

`productId` + `variantId` together uniquely identify *which line* this is, so the same product in two colors is two separate lines, each with its own quantity, rather than one line trying to track two counts at once. Quantity lives on the item itself because it's real user-editable state, not something that can be computed from anything else. Everything derived from the cart — subtotal, total, total saved — is calculated fresh from `items` + the product catalog every time (`src/utils/cartUtils.ts`), never stored, so it can't drift out of sync.

## How it works

- **Accordion steps.** Four steps — cameras, plan, sensors, accessories. Steps can be opened independently, and each shows "N selected" next to its chevron once you've picked something. That count is of *distinct products*, not quantity or variant count — picking two colors of the same camera still counts as 1 selected, not 2.
- **Next button.** Each open step ends with a "Next: [step name]" button that jumps you to the following step.
- **Variants.** Swatches under a product switch which color you're looking at. The quantity stepper always controls whichever variant is currently selected, each color keeps its own count in the background.
- **Quantity rules.** Regular items go from 0 up. The Sense Hub is required and locked at exactly 1. The plan is capped at 0 or 1, since you can only be subscribed once. Buttons disable themselves at these limits instead of letting you hit an invalid state.
- **Review panel.** Reads from the same cart store as the builder panel, so changing a quantity on either side updates both instantly. There's one source of truth, not two things trying to stay in sync.
- **Save for later.** Clicking "Save my system for later" writes the current cart to `localStorage`. Reload the page, or come back later, and it's restored exactly as you left it. If key is empty or doesn't exist in localStorage, it will be set with initial seed driven from Figma design per requirements.
- **Checkout.** Checkout just shows a toast confirmation.

## Decisions and tradeoffs

A few calls I made where the spec didn't spell things out, in case they matter:

- Checkout has no real destination, clicking it shows a toast and nothing else.
- I used a mobile-first approach, since it's easier to build up to larger screens than to squeeze a desktop layout down. I tested responsiveness using a Chrome device-simulation extension across a few screen sizes, rather than on physical devices.
- For this requirement **"The review panel reflects every variant with a count above zero, as its own line."**, I implemented it differently and instead of showing the product in review panel and any other variants in one line there is a separate line for variant. In my defense, I thought it would be make user experience easier having to increment or decrement quantity of a variant separately from review panel in case accordion of that category was collapsed.

## What I didn't get to do

- Didn't implement a backend, thought I would focus on the frontend work to avoid overhead from dealing with extra work in the backend and instead enhance frontend as much as I can.
- The financing line mentioned above is a placeholder rather than a real computed value, as I couldn't decypher how it is computed and wasn't mentioned either.
- Gilroy isn't fully free — I could only get two weights (Light and ExtraBold), not the full family the Figma design uses, so some text may look a bit off-weight compared to the design.