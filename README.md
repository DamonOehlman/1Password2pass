# 1Password -> pass Import Utility

I've recently switched over from using a Mac --> Linux, and needed to convert passwords across.  After having a look at a few different password managers, I decided to use [pass](http://zx2c4.com/projects/password-store/).

While there were no importers built for a [1Password](https://agilebits.com/onepassword) --> [pass](http://zx2c4.com/projects/password-store/) migration, it didn't take too long to knock one up in Node.

## Step 1: Export your 1Password Data

Pretty simple really:

- Fire up 1Password.
- Select File > Export All > File...
- Follow the prompts

## Optional Step 1.5: Curate Your Export

At this stage you have a fairly easy to curate file of your passwords.  In the first column of the file is the title of the entry, and this will be pushed into pass as the title (as is).  

If you have reviewed pass' documentation you will notice that it uses a naming scheme of Folder/Folder/Entry.  I don't know about you, but I didn't have my 1Password's this well organized, so I took some time to tweak the entries a little so I got meaningful structure when imported into pass.

## Step 2: Import your Passwords into Pass

First clone this repository:

```console
git clone https://github.com/DamonOehlman/1Password2pass.git
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