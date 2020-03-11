<?php
    $ultimos3 = array_slice($desarrollos, 0, 3);
?>
<div id="main-home" class="main-bloques">
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <?php
                
                foreach($desarrollos as$key => $value){
                   
                    $only250words = substr($value['content']['rendered'],0, 180);
                     $only250words = trim ( $only250words );
                    $only250words= ltrim( $only250words, '<p>' );
                    $only250words = rtrim( $only250words, '</p>' );
                    echo "
                    <div class='swiper-slide' style='position:relative;background-image:url({$value['acf']['image']['url']});background-size:cover;background-position:center;width:100%;height:100%;'>
                        <div class='home-info-proyecto'>
                            <h1> {$value['title']['rendered']} </h1>
                            <p>{$only250words}</p>
                            <span class='home-ver-proyecto-btn' data-page='{$value['slug']}' data-id='{$value['id']}'> Ver proyecto </span>
                        </div>
                    </div> ";
                }
            ?>
        </div>
      <!-- Add Pagination -->
        <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    <div class="home-last-work">
        <h2> Ultimos proyectos </h2>
        <div class="home-last-workgrid" style='display:grid;grid-template-columns:repeat(<?php echo count($ultimos3) ?>, 1fr);grid-column-gap:10px;align-items:center;justify-items:center;'>
        <?php
            
            foreach( $ultimos3 as $key => $value){
                 if($value["acf"]["image2"]){
                    echo "<a href='https://broeders.com.ar/sk2/?page={$value['id']}&slug={$value['slug']}' class='proyecto-cajas proyecto-hover' data-page='{$value['slug']}' data-id='{$value['id']}' data-displacement='img/10.jpg'>
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
        <a class="home-last-work-button" data-page='desarrollos' href="https://broeders.com.ar/sk2/?page=desarrollos&slug=desarrollos">Ver Todos</a>
    </div>    
</div>

<script>
    $(document).ready(function(){
        
    })
</script>