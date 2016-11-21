# Magento Spreadsheet

This is an extension for Magento 1.x. It's basically just a test solution to a particular problem. It contains the solution to that problem, packaged as a Magento module.

# Installation

## Using Modman

- Make sure you have [Modman](https://github.com/colinmollenhour/modman) installed.
- Allow symlinks for the templates directory (required for installations via Modman):
    - Use n98-magerun like a boss: `n98-magerun.phar dev:symlinks` OR
    - Set 'Allow Symlinks' to 'Yes' inside System - Configuration / Advanced / Developer / Template Settings.
- Install Magento Spreadsheet module:
```bash
cd [magento root folder]
modman init
modman clone git@github.com:catalinpreda/spreadsheet.git
```
- Flush Magento cache.

## Hardcore

- Clone the repo:
```bash
git clone git@github.com:catalinpreda/spreadsheet.git
```
- Move module files by hand, following the map inside the `modman` file.
