# Contributing to vercel-swag

Add your vercel swag to the collection.

## Steps to follow

### 1. Fork the repository

Click the fork button on the top right.

<img width="552" alt="Screenshot 2023-02-18 at 16 40 11" src="https://user-images.githubusercontent.com/101022772/219877481-f949dca8-75a6-4ab3-b0aa-e6cbc1522c0e.png">

### 2. Clone the forked version

Click the green button and copy the url.

<img width="483" alt="Screenshot 2023-02-18 at 16 41 11" src="https://user-images.githubusercontent.com/101022772/219877527-26c535a8-5b98-4ff0-ad5a-f262b58b0940.png">

Go to your terminal, clone the repository and navigate to it.

```sh
git clone https://github.com/alsonick/vercel-swag.git
cd vercel-swag
```

After that open the project in your editor of choice.

### 3. Add your vercel swag pics

Inside the repository, save your pictures inside the `public/pictures` directory.

#### Naming convention

`TWITTER_HANDLE`: Your Twitter handle.

`INDEX`: If you're uploading multiple pictures then please prefix the posistion, so your third picture will have a prefix of 3 and your second one will have a prefix of 2.

`@[TWITTER_HANDLE]-vercel-swag-[INDEX].jpeg`

#### File data

After that navigate to the `swag.json` file inside the `data` directory and add a new object at the end of the array, include the `twitter_handle`, `file_ext` & `pic_index` properties.

<img width="246" alt="Screenshot 2023-02-18 at 17 04 49" src="https://user-images.githubusercontent.com/101022772/219878647-bed816f1-dc36-4bb2-ae24-881873bc4e5b.png">

### 4. Submit your pr

After you've done the following steps, commit your changes and open a pr. 🎉 
