

<template>
  <div class="main">
  <div id="particles-js"></div>

  <div class="container max-w-screen-lg mx-auto flex justify-center pt-20">
      <img src="https://tecsify.com/blog/wp-content/uploads/2021/05/bluenew.png" alt="Tecsify Logo" style="width: 17rem !important">
    </div>
    <div style="text-align:center !important;">

<div class="container max-w-screen-lg mx-auto flex justify-center">
<p class=" py-8">
<span class="text-xl" style="text-align:center;font-weight:400; "><span style="color: #030399 !important; font-size:1.5rem"> {{ $t('welcome-msg') }}</span><br />
{{ $t('home-description') }}
</span><br /> <br />
<span class="text-xs">
{{ $t('home-description-2') }}
 </span></p>
</div>


<style>
  .botonlenguage{
    background-color: #030399 !important;
  }
</style>

    <a href="/es/cv">
    <br />
<button class="botonlenguage bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">

{{ $t('es-name') }}
</button>
</a>
<a href="/en/cv">
<button class="botonlenguage bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
{{ $t('en-name') }}
</button>
</a>
<a href="/fr/cv">
<button class="botonlenguage bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
{{ $t('fr-name') }}
</button>
</a>
<a href="/de/cv">
<button class="botonlenguage g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
{{ $t('de-name') }}
</button>
</a>
<a href="/pt/cv">
<button class="botonlenguage bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
{{ $t('pt-name') }}
</button>
</a>
<p class="text-sm py-8"> 
{{ $t('lenguage-select')}}
</p>
  </div>
  </div>

</template>

