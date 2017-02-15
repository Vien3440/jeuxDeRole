$(document).ready(function () {
// Recup valeur pv actuel
    var $pv = $('input[id=appbundle_stats_pv]').val();
    var $att = $('input[id=appbundle_stats_att]').val();
//    var $mov = $('input[id=appbundle_stats_mov]').val();


//quand je click sur pv 
    pvUpdate($pv);
    attUpdate($att);


    function pvUpdate($pv) {
       
        $('input[id=appbundle_stats_pv]').click(function () {
             $rd =  parseInt($('input[id=rdStats]').val());
            // si les pv sont modifié 
            if ($pv < $('input[id=appbundle_stats_pv]').val()) {
                // je crée une variable avec la nouvelle valeur de rd 
                // j'affecte cette nouvelle valeur a rd 
                $rd = $rd - 1; //Set new valeur
                $('input[id=rdStats]').val($rd);//Get new valeur
                // je crée une variable avec la nouvelle valeur de pv 
                $newPv = parseInt($('input[id=appbundle_stats_pv]').val());
                // j'affecte cette nouvelle valeur a pv 
                $pv = $newPv;
                $('#appbundle_stats_pv').attr({
                    "max": $newPv + $rd
                });
            }else if ($pv > $('input[id=appbundle_stats_pv]').val()) {
                
                $rd =  $rd + 1; //Set new valeur
                $('input[id=rdStats]').val($rd);//Get new valeur
                // je crée une variable avec la nouvelle valeur de pv 
                $newPv = parseInt($('input[id=appbundle_stats_pv]').val());
                // j'affecte cette nouvelle valeur a pv 
                $pv = $newPv;

                
            }


        });

    }

    function attUpdate($att) {
        $('input[id=appbundle_stats_att]').click(function () {
                    var $rd = parseInt($('input[id=rdStats]').val());

            // si les pv sont modifié 
            if ($att < $('input[id=appbundle_stats_att]').val()) {
                // je crée une variable avec la nouvelle valeur de rd 
                // j'affecte cette nouvelle valeur a rd 
                $rd = $rd - 1;
                $('input[id=rdStats]').val($rd);
                // je crée une variable avec la nouvelle valeur de att 
                $newAtt = parseInt($('input[id=appbundle_stats_att]').val());
                // j'affecte cette nouvelle valeur a att 
                $att = $newAtt;

                $('#appbundle_stats_att').attr({
                    "max": $newAtt + $rd
                });
            }else if ($att > $('input[id=appbundle_stats_att]').val()) {
                
                $rd =  $rd + 1; //Set new valeur
                $('input[id=rdStats]').val($rd);//Get new valeur
                // je crée une variable avec la nouvelle valeur de att
                $newAtt = parseInt($('input[id=appbundle_stats_att]').val());
                // j'affecte cette nouvelle valeur a att 
                $att = $newAtt;

                
            }

        });
    }

});

