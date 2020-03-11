<div id="main-desarrollos" class="main-bloques">
    <div class="area_nav_menu_bloques">
        <div class="navmap">
            <span data-page="home"> INICIO </span>
            <p> / </p>
            <span data-page="desarrollos" style='color:#333 !important;font-weight:700 !important;'> DESARROLLOS </span>
        </div>
        <div style="width:100%;height:5px;background:black;"> </div>
    </div>
    <div id="proyecto-root">
        
        <?php
            foreach($desarrollos as $key => $value){
                if($value["acf"]["image2"]){
                    echo "<a href='https://broeders.com.ar/sk2/?page={$value['id']}&slug={$value['slug']}'  class='proyecto-cajas proyecto-hover' data-page='{$value['slug']}' data-id='{$value['id']}' data-displacement='img/10.jpg'>
                                <img style='display:none;' src='{$value['acf']['image']['sizes']['medium_large']}' data-src='{$value['acf']['image']['sizes']['medium_large']}'> 
                                <img style='display:none;' src='{$value['acf']['image2']['sizes']['medium_large']}' data-src2='{$value['acf']['image2']['sizes']['medium_large']}'>
                                 <span class='allspan' id='{$value['slug']}' data-id='{$value['slug']}'style='color:black;opacity:0;' class='proyecto_cajas_title'> 
                                    {$value['title']['rendered']} 
                                </span>
                         </a>";
                }else{
                    echo "<a href='https://broeders.com.ar/sk2/?page={$value['id']}&slug={$value['slug']}' class='proyecto-cajas' data-page='{$value['slug']}' data-id='{$value['id']}'  style='background-image:url({$value['acf']['image']['sizes']['medium_large']});background-size:cover;'>
                            <span class='allspan' id='{$value['slug']}' data-id='{$value['slug']}' style='color:black;opacity:0;' class='proyecto_cajas_title'>
                                {$value['title']['rendered']} 
                           </span>
                          </a>";
                }
            }
        ?>
                                    
    </div>
    
</div>
<style>
    
</style>