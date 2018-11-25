create-ember-ghost-template
==============================================================================

This is a utility to get you started in creating a new [Ember-Ghost](https://github.com/empress/ember-ghost) template. It generates an Ember Addon that is set up with a **very** basic template. To see the initial output you can go to https://create-ember-ghost-template.netlify.com/

Once you have this running locally it is time for you to jump in and start editing the templates and styles so that your template looks super awesome! 💪 If you create an template that other people can use please [ping me on twitter](https://twitter.com/real_ate) and I'll add it to a list of available templates

## Requirements
You should make sure that you have `npm` version 6.1 or later:

```sh
npm -v
# 6.4.1
```

If your installed version is less than `6.1.0` then you need to update using the [official update documentation](https://docs.npmjs.com/try-the-latest-stable-version-of-npm). And as a bonus you might get a [massive speed bump](https://blog.npmjs.org/post/173240511455/the-new-npm-cli-a-year-in-review-or-what-you) at the same time 🎉

## Usage

```sh
npm init ember-ghost-template <name>
```

This will create a new Ember Ghost template called ember-ghost-<name>-template in the current directory. You should then be able to cd into the directory and start the example app.

```sh
cd ember-ghost-example-template
npm start
```

Now if you visit http://localhost:4200 you will see the basic template. You should then be able to edit the `hbs` files in `app/templates` and the styles in `addon/styles/addon.css` until you're happy with the new design. The example app will live-reload on http://localhost:4200 as you make changes to the templates and the styles.

## Advanced
An Ember-Ghost template is no different from a regular Ember Addon, save for the location of the template files. You can extend this addon by installing as many other addons as you may need, for example if you would like to use [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) you can.

**Important note:** you must follow whatever instructions that an addon has to install into another addon. `ember-cli-sass` has extra documentation that you would need to follow to make sure it works https://github.com/aexmachina/ember-cli-sass#addon-usage


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
