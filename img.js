const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

const sizes = {
    "xs": 50,
    "sm": 200,
    "md": 500,
    "lg": 1000,
    "og": null
}

function resizeXSmall(img){
    return _resize(img, 50)
        //.png({quality: this._resizeQuality})
        //.toBuffer();

}

function resizeSmall(img){
    return _resize(img, 200)
        //.png({quality: this._resizeQuality})
        //.toBuffer();
}

function resizeMedium(img){
    return _resize(img, 500)
        //.png({quality: this._resizeQuality})
        //.toBuffer();
}

function resizeLarge(img){
    return _resize(img, 1000)
        //.png({quality: this._resizeQuality})
        //.toBuffer();
}

function resize(img, width){
    return sharp(img).resize(width)
}

const outDir = "public/img"
const inDir = "public/img_original"

function processImages(dir, size) {
    fs.readdir( inDir + "/" + dir, (err, files) => {
        files.forEach((f) => {
            file = inDir + dir + "/" + f
            outFile = outDir + "/" + size + "/" + dir + "/" + f
            const stat = fs.statSync(file);
            if(stat.isDirectory()){

                if(!fs.existsSync(outFile)){
                    fs.mkdirSync(outFile, {recursive: true});
                }

                processImages(dir + "/" + f, size)
            }else{
                //console.log(file);
                if(!fs.existsSync(outFile)){
                    console.log(outFile);
                    if(size === "og"){
                        fs.copyFileSync(file, outFile);
                    }else{
                        resize(file, sizes[size]).toFile(outFile);
                    }
                }
            }
        });
    });
}


processImages("", "sm");
processImages("", "md");
processImages("", "lg");
processImages("", "xs");
processImages("", "og");

if(fs.existsSync("favicon.ico")){
    fs.cpSync("favicon.ico", "public/img/favicon.ico");
}