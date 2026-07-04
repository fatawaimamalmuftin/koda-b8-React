# stage 1 bertugas ambil source code dari git hub

# bikin container sementara untuk clone dari git hub
## insatall images distro alpine dan membuat alias untuk di panggil kembali di container proses selanjutnya
FROM alpine:latest AS source
## container ini berjalan di folder /source
WORKDIR /source
## install git menggunakan package manager apk
RUN apk add --no-cache git
## clone dari link, karna sebelumnya udah instal git makanya sekarang udah bisa mengunakan perintah git ( titik di akhir di artikan sebagai "di sini" )
RUN git clone https://github.com/fatawaimamalmuftin/koda-b8-React .
#-------------------------------------------------------------------------
# stage 2 bertugas menjalankan run build ( perintah dari react ) yg menghasilkan folder /dist

# bikin container sementara untuk build
## install image Node.js versi 24 berbasis Alpine Linux ( menggunakan image Node.js berbasis Alpine agar ukuran image lebih kecil) 
FROM node:24-alpine AS builder
## container ini berjalan di folder /build
WORKDIR /build
## menyalin seluruh isi folder /source dari stage sebelumnya, ke direktori kerja ( /build ) pada stage ini
COPY --from=source /source .
## instal node modules
RUN npm install
## menjalankan proses build production. pada stage ini Vite akan membundel source code React menjadi file statis > seperti HTML, CSS, JavaScript, dan assets yang akan disajikan oleh web server
RUN npm run build
#-------------------------------------------------------------------------
# stage 3 bertugas memproses seluruh ini container production ( karna seluruh stage ini berjalan di container production dan sekarang di stage 3 ini isinya ada folder /dist tinggal di jalanin di browser )

# menggunakan image resmi NGINX sebagai image production final
## install images nginx untuk distro alpine lts ( karna di stage pertama menggunakan distro linux alpine lts, jadi node nya harus sama dengan distro yg di gunakan sebelumnya) 
FROM nginx:stable-alpine
## copy isi dari stage 2 yg berisi /dist dengan memanggil alias nya ( AS ). copy dari /build(nama aliasnya) ke /usr/share/nginx/html. kalau di buka /usr/share/nginx/html ini berisi: index.html , assets/favicon.ico ( ini folder yg akan di baca server nginx sebagai document root gitu dari aturan server nginx )
COPY --from=builder /build/dist /usr/share/nginx/html
## 
COPY --from=builder /build/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80