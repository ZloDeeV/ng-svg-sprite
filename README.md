# SVG icon package for Angular 6

This npm module in Angular package format provides both a solution for using SVG sprites and a component for including them.

## Use Cases

- include single-color icons from a sprite
- fill and stroke icons dynamically via CSS
- achieve hover/focus effects via CSS
- scale icons dynamically

## Installation

```
#: npm i ng-svg-icons --save-dev
or
#: yarn add ng-svg-icons --dev

```

After installing the package you can import it into any application’s app.module.ts by simply including it in its
`@NgModule` imports array:

```javascript
import { SvgIconModule } from 'ng-svg-icons'; // <-- this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgIconModule // <-- this
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

To use your SVGs as a sprite you need to:

1. Generate a SVG sprite using a script
2. Include the `svg-icon` component with the proper sprite path and SVG name

### Step 1: Generate the sprite

Add the library [for sprite generation svg2sprite](https://github.com/mrmlnc/svg2sprite-cli) as a devDependency:

```
#: npm i svg2sprite-cli --save-dev
or
#: yarn add svg2sprite-cli --dev

and execute the script:
#: svg2sprite ./src/assets/icons ./src/assets/sprites/sprite.svg --stripAttrs fill --stripAttrs stroke --stripAttrs id
```

Each time you add an icon, you need to rerun the script generating the sprite. You might want to add it to your npm scripts:

__Note: the fill and stroke properties are removed from the icon so they can be filled via CSS__

The script will take all SVG icons from `src/app/assets/icons` and create a sprite SVG into
`src/app/assets/sprites` using the [svg symbols technique](https://css-tricks.com/svg-symbol-good-choice-icons/).

```
app
└── assets
    └── icons (icons source)
        └── icon-1.svg
        └── icon-2.svg
    └── sprites (sprite destination)
        └── sprite.svg
```

### Step 2: Use the component

Now you can include icons by using the `svg-icon` component directive:

```html
<!-- here including 'cart' SVG from the sprite -->

<svg-icon
  [src]="'assets/sprites/sprite.svg#cart'"
  [width]="'22px'"
  [classes]="'icon-class'"
></svg-icon>

<!-- or with a dynamic icon name -->

<svg-icon
  [src]="'assets/sprites/sprite.svg#' + iconName"
  [width]="'50%'"
></svg-icon>
```

## Options

- `src` - icon source name, the syntax is `path/file#icon` where `path` is relative to app folder, `file` is
the name of the sprite and `icon` is the filename of the svg icon.
- `width` *optional* - width of the svg in any length unit, i.e. `32px`, `50%`, `auto` etc., default is `100%`
- `height` *optional* - the height of the svg in any length unit, if undefined height will equal the width
- `classes` *optional* - class name for this icon, default is `icon`
- `viewBox` *optional* - define lengths and coordinates in order to scale to fit the total space available (to be used if the viewBox of the SVG is missing)
- `preserveAspectRatio` *optional* - manipulate the aspect ratio, only in combination with `viewBox` (see SVG standard for details)
- `colorFor` *optional* - color will be set only for `stroke`, `fill`, or for `both` properties (some icons can be stroked)

## Compatible Angular versions
This library is optimized for Angular 6.x.
