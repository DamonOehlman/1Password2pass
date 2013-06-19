# 1Password -> pass Import Utility

I've recently switched over from using a Mac --> Linux, and needed to convert passwords across.  After having a look at a few different password managers, I decided to use [pass](http://zx2c4.com/projects/password-store/).

While there were no importers built for a [1Password](https://agilebits.com/onepassword) --> [pass](http://zx2c4.com/projects/password-store/) migration, it didn't take too long to knock one up in Node.

## Step 1: Export your 1Password Data

Pretty simple really:

- Fire up 1Password.
- Select File > Export All > File...
- Follow the prompts

## Step 2: Import your Passwords into Pass

First clone this repository:

```console
TODO
cd 1Password2pass
```

Next, install node dependencies:

```console
npm install
```

Copy your 1Password export file into the current working directory as `export.txt`, and then run the import script:

```console
node ./
```

__NOTE:__ Before you run this script you will need to configure and setup pass.  This goes beyond the scope of these instructions but isn't too difficult.