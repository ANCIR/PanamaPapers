$(document).ready(function() {
    initialize();
     $('#medicines').on('change', function () {
         var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
         var key3 = '#705e76';
         var key5 = '#ac79a4';
         var key7 = '#993556';
         var key30 = '#790800';

        if (this.value == 'M01') {  
            animateGrid();configurate_M1();
            $('object.graphic').attr('data','svg/Amitriptyline.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Chad</i>');
            $('li.c02').html('<i>Egypt</i>');
            $('li.c03').html('<i>Ethiopia</i>');
            $('li.c04').html('<i>Ghana</i>');
            $('li.c05').html('<i>Kenya</i>');
            $('li.c06').html('<i>Mauritius</i>');
            $('li.c07').html('<i>Morocco</i>');
            $('li.c08').html('<i>Nigeria</i>');
            $('li.c09').html('<i>South Africa, Gauteng Province</i>');
            $('li.c10').html('<i>Sudan</i>');
            $('li.c11').html('<i>Tanzania</i>');
            $('li.c12').html('<i>Tunisia</i>');
            $('li.c13').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Amitriptyline<br><i>Chad</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Amitriptyline<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Amitriptyline<br><i>Ethiopia</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Amitriptyline<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Amitriptyline<br><i>Kenya</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Amitriptyline<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Amitriptyline<br><i>Morocco</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Amitriptyline<br><i>Nigeria</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Amitriptyline<br><i>South Africa, Gauteng Province</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Amitriptyline<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Amitriptyline<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Amitriptyline<br><i>Tunisia</i><br><strong>30 days</strong></span>');
            $('div.tp13').html('<span>Amitriptyline<br><i>Uganda</i><br><strong>30 days</strong></span>');
        } 
        else if (this.value == 'M02') {  
            animateGrid();configurate_M2();
            $('object.graphic').attr('data','svg/Amoxicillin.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Cameroon</i>');
            $('li.c04').html('<i>Congo</i>');
            $('li.c05').html('<i>Democratic Republic of Congo</i>');
            $('li.c06').html('<i>Ethiopia</i>');
            $('li.c07').html('<i>Mali</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>Morocco</i>');
            $('li.c10').html('<i>Nigeria</i>');
            $('li.c11').html('<i>São Tomé and Príncipe</i>');
            $('li.c12').html('<i>Sudan</i>');
            $('li.c13').html('<i>Tunisia</i>');

            $('div.tp01').html('<span>Amoxicillin<br><i>Burkina Faso</i><br><strong>7 days</strong></span>');
            $('div.tp02').html('<span>Amoxicillin<br><i>Burundi</i><br><strong>7 days</strong></span>');
            $('div.tp03').html('<span>Amoxicillin<br><i>Cameroon</i><br><strong>7 days</strong></span>');
            $('div.tp04').html('<span>Amoxicillin<br><i>Congo</i><br><strong>7 days</strong></span>');
            $('div.tp05').html('<span>Amoxicillin<br><i>Democratic Republic of Congo</i><br><strong>7 days</strong></span>');
            $('div.tp06').html('<span>Amoxicillin<br><i>Ethiopia</i><br><strong>7 days</strong></span>');
            $('div.tp07').html('<span>Amoxicillin<br><i>Mali</i><br><strong>7 days</strong></span>');
            $('div.tp08').html('<span>Amoxicillin<br><i>Mauritius</i><br><strong>7 days</strong></span>');
            $('div.tp09').html('<span>Amoxicillin<br><i>Morocco</i><br><strong>7 days</strong></span>');
            $('div.tp10').html('<span>Amoxicillin<br><i>Nigeria</i><br><strong>7 days</strong></span>');
            $('div.tp11').html('<span>Amoxicillin<br><i>São Tomé and Príncipe</i><br><strong>7 days</strong></span>');
            $('div.tp12').html('<span>Amoxicillin<br><i>Sudan</i><br><strong>7 days</strong></span>');
            $('div.tp13').html('<span>Amoxicillin<br><i>Tunisia</i><br><strong>7 days</strong></span>');
        }
        else if (this.value == 'M03') {  
            animateGrid();configurate_M3();
            $('object.graphic').attr('data','svg/Atenolol.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Democratic Republic of Congo</i>');
            $('li.c03').html('<i>Egypt</i>');
            $('li.c04').html('<i>Ghana</i>');
            $('li.c05').html('<i>Kenya</i>');
            $('li.c06').html('<i>Mauritius</i>');
            $('li.c07').html('<i>Nigeria</i>');
            $('li.c08').html('<i>São Tomé and Príncipe</i>');
            $('li.c09').html('<i>South Africa, Gauteng Province</i>');
            $('li.c10').html('<i>Sudan</i>');
            $('li.c11').html('<i>Tanzania</i>');
            $('li.c12').html('<i>Tunisia</i>');

            $('div.tp01').html('<span>Atenolol<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Atenolol<br><i>Democratic Republic of Congo</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Atenolol<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Atenolol<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Atenolol<br><i>Kenya</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Atenolol<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Atenolol<br><i>Nigeria</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Atenolol<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Atenolol<br><i>South Africa, Gauteng Province</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Atenolol<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Atenolol<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Atenolol<br><i>Tunisia</i><br><strong>30 days</strong></span>');
        }
        else if (this.value == 'M04') {  
            animateGrid();configurate_M4();
            $('object.graphic').attr('data','svg/Captopril.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Congo</i>');
            $('li.c03').html('<i>Democratic Republic of Congo</i>');
            $('li.c04').html('<i>Egypt</i>');
            $('li.c05').html('<i>Ghana</i>');
            $('li.c06').html('<i>Kenya</i>');
            $('li.c07').html('<i>Mali</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>Morocco</i>');
            $('li.c10').html('<i>Nigeria</i>');
            $('li.c11').html('<i>São Tomé and Príncipe</i>');
            $('li.c12').html('<i>South Africa, Gauteng Province</i>');
            $('li.c13').html('<i>Sudan</i>');
            $('li.c14').html('<i>Tanzania</i>');
            $('li.c15').html('<i>Tunisia</i>');

            $('div.tp01').html('<span>Captopril<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Captopril<br><i>Congo</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Captopril<br><i>Democratic Republic of Congo</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Captopril<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Captopril<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Captopril<br><i>Kenya</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Captopril<br><i>Mali</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Captopril<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Captopril<br><i>Morocco</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Captopril<br><i>Nigeria</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Captopril<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Captopril<br><i>South Africa, Gauteng Province</i><br><strong>30 days</strong></span>');
            $('div.tp13').html('<span>Captopril<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp14').html('<span>Captopril<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp15').html('<span>Captopril<br><i>Tunisia</i><br><strong>30 days</strong></span>');
        }
        else if (this.value == 'M05') {  
            animateGrid();configurate_M5();
            $('object.graphic').attr('data','svg/Ceftriaxone.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Cameroon</i>');
            $('li.c03').html('<i>Congo</i>');
            $('li.c04').html('<i>Democratic Republic of Congo</i>');
            $('li.c05').html('<i>Ghana</i>');
            $('li.c06').html('<i>Kenya</i>');
            $('li.c07').html('<i>Mali</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>Morocco</i>');
            $('li.c10').html('<i>Nigeria</i>');
            $('li.c11').html('<i>São Tomé and Príncipe</i>');
            $('li.c12').html('<i>Sudan</i>');
            $('li.c13').html('<i>Tanzania</i>');
            $('li.c14').html('<i>Tunisia</i>');
            $('li.c15').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Ceftriaxone<br><i>Burkina Faso</i><br><strong>1 day</strong></span>');
            $('div.tp02').html('<span>Ceftriaxone<br><i>Cameroon</i><br><strong>1 day</strong></span>');
            $('div.tp03').html('<span>Ceftriaxone<br><i>Congo</i><br><strong>1 day</strong></span>');
            $('div.tp04').html('<span>Ceftriaxone<br><i>Democratic Republic of Congo</i><br><strong>1 day</strong></span>');
            $('div.tp05').html('<span>Ceftriaxone<br><i>Ghana</i><br><strong>1 day</strong></span>');
            $('div.tp06').html('<span>Ceftriaxone<br><i>Kenya</i><br><strong>1 day</strong></span>');
            $('div.tp07').html('<span>Ceftriaxone<br><i>Mali</i><br><strong>1 day</strong></span>');
            $('div.tp08').html('<span>Ceftriaxone<br><i>Mauritius</i><br><strong>1 day</strong></span>');
            $('div.tp09').html('<span>Ceftriaxone<br><i>Morocco</i><br><strong>1 day</strong></span>');
            $('div.tp10').html('<span>Ceftriaxone<br><i>Nigeria</i><br><strong>1 day</strong></span>');
            $('div.tp11').html('<span>Ceftriaxone<br><i>São Tomé and Príncipe</i><br><strong>1 day</strong></span>');
            $('div.tp12').html('<span>Ceftriaxone<br><i>Sudan</i><br><strong>1 day</strong></span>');
            $('div.tp13').html('<span>Ceftriaxone<br><i>Tanzania</i><br><strong>1 day</strong></span>');
            $('div.tp14').html('<span>Ceftriaxone<br><i>Tunisia</i><br><strong>1 day</strong></span>');
            $('div.tp15').html('<span>Ceftriaxone<br><i>Uganda</i><br><strong>1 day</strong></span>');
        } 
        else if (this.value == 'M06') {  
            animateGrid();configurate_M6();
            $('object.graphic').attr('data','svg/Ciprofloxacin.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Cameroon</i>');
            $('li.c04').html('<i>Congo</i>');
            $('li.c05').html('<i>Democratic Republic of Congo</i>');
            $('li.c06').html('<i>Ethiopia</i>');
            $('li.c07').html('<i>Ghana</i>');
            $('li.c08').html('<i>Kenya</i>');
            $('li.c09').html('<i>Mali</i>');
            $('li.c10').html('<i>Mauritius</i>');
            $('li.c11').html('<i>Morocco</i>');
            $('li.c12').html('<i>Nigeria</i>');
            $('li.c13').html('<i>São Tomé and Príncipe</i>');
            $('li.c14').html('<i>South Africa, Gauteng Province</i>');
            $('li.c15').html('<i>Sudan</i>');
            $('li.c16').html('<i>Tanzania</i>');
            $('li.c17').html('<i>Tunisia</i>');
            $('li.c18').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Ciprofloxacin<br><i>Burkina Faso</i><br><strong>7 days</strong></span>');
            $('div.tp02').html('<span>Ciprofloxacin<br><i>Burundi</i><br><strong>7 days</strong></span>');
            $('div.tp03').html('<span>Ciprofloxacin<br><i>Cameroon</i><br><strong>7 days</strong></span>');
            $('div.tp04').html('<span>Ciprofloxacin<br><i>Congo</i><br><strong>7 days</strong></span>');
            $('div.tp05').html('<span>Ciprofloxacin<br><i>Democratic Republic of Congo</i><br><strong>7 days</strong></span>');
            $('div.tp06').html('<span>Ciprofloxacin<br><i>Ethiopia</i><br><strong>7 days</strong></span>');
            $('div.tp07').html('<span>Ciprofloxacin<br><i>Ghana</i><br><strong>7 days</strong></span>');
            $('div.tp08').html('<span>Ciprofloxacin<br><i>Kenya</i><br><strong>7 days</strong></span>');
            $('div.tp09').html('<span>Ciprofloxacin<br><i>Mali</i><br><strong>7 days</strong></span>');
            $('div.tp10').html('<span>Ciprofloxacin<br><i>Mauritius</i><br><strong>7 days</strong></span>');
            $('div.tp11').html('<span>Ciprofloxacin<br><i>Morocco</i><br><strong>7 days</strong></span>');
            $('div.tp12').html('<span>Ciprofloxacin<br><i>Nigeria</i><br><strong>7 days</strong></span>');
            $('div.tp13').html('<span>Ciprofloxacin<br><i>São Tomé and Príncipe</i><br><strong>7 days</strong></span>');
            $('div.tp14').html('<span>Ciprofloxacin<br><i>South Africa, Gauteng Province</i><br><strong>7 days</strong></span>');
            $('div.tp15').html('<span>Ciprofloxacin<br><i>Sudan</i><br><strong>7 days</strong></span>');
            $('div.tp16').html('<span>Ciprofloxacin<br><i>Tanzania</i><br><strong>7 days</strong></span>');
            $('div.tp17').html('<span>Ciprofloxacin<br><i>Tunisia</i><br><strong>7 days</strong></span>');
            $('div.tp18').html('<span>Ciprofloxacin<br><i>Uganda</i><br><strong>7 days</strong></span>');
        }
        else if (this.value == 'M07') {  
            animateGrid();configurate_M7();
            $('object.graphic').attr('data','svg/Co-trimoxazole.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Cameroon</i>');
            $('li.c03').html('<i>Chad</i>');
            $('li.c04').html('<i>Congo</i>');
            $('li.c05').html('<i>Democratic Republic of Congo</i>');
            $('li.c06').html('<i>Ghana</i>');
            $('li.c07').html('<i>Kenya</i>');
            $('li.c08').html('<i>Mali</i>');
            $('li.c09').html('<i>Mauritius</i>');
            $('li.c10').html('<i>Morocco</i>');
            $('li.c11').html('<i>Nigeria</i>');
            $('li.c12').html('<i>São Tomé and Príncipe</i>');
            $('li.c13').html('<i>South Africa, Gauteng Province</i>');
            $('li.c14').html('<i>Sudan</i>');
            $('li.c15').html('<i>Tanzania</i>');
            $('li.c16').html('<i>Tunisia</i>');
            $('li.c17').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Co-trimoxazole<br><i>Burkina Faso</i><br><strong>7 days</strong></span>');
            $('div.tp02').html('<span>Co-trimoxazole<br><i>Cameroon</i><br><strong>7 days</strong></span>');
            $('div.tp03').html('<span>Co-trimoxazole<br><i>Chad</i><br><strong>7 days</strong></span>');
            $('div.tp04').html('<span>Co-trimoxazole<br><i>Congo</i><br><strong>7 days</strong></span>');
            $('div.tp05').html('<span>Co-trimoxazole<br><i>Democratic Republic of Congo</i><br><strong>7 days</strong></span>');
            $('div.tp06').html('<span>Co-trimoxazole<br><i>Ghana</i><br><strong>7 days</strong></span>');
            $('div.tp07').html('<span>Co-trimoxazole<br><i>Kenya</i><br><strong>7 days</strong></span>');
            $('div.tp08').html('<span>Co-trimoxazole<br><i>Mali</i><br><strong>7 days</strong></span>');
            $('div.tp09').html('<span>Co-trimoxazole<br><i>Mauritius</i><br><strong>7 days</strong></span>');
            $('div.tp10').html('<span>Co-trimoxazole<br><i>Morocco</i><br><strong>7 days</strong></span>');
            $('div.tp11').html('<span>Co-trimoxazole<br><i>Nigeria</i><br><strong>7 days</strong></span>');
            $('div.tp12').html('<span>Co-trimoxazole<br><i>São Tomé and Príncipe</i><br><strong>7 days</strong></span>');
            $('div.tp13').html('<span>Co-trimoxazole<br><i>South Africa, Gauteng Province</i><br><strong>7 days</strong></span>');
            $('div.tp14').html('<span>Co-trimoxazole<br><i>Sudan</i><br><strong>7 days</strong></span>');
            $('div.tp15').html('<span>Co-trimoxazole<br><i>Tanzania</i><br><strong>7 days</strong></span>');
            $('div.tp16').html('<span>Co-trimoxazole<br><i>Tunisia</i><br><strong>7 days</strong></span>');
            $('div.tp17').html('<span>Co-trimoxazole<br><i>Uganda</i><br><strong>7 days</strong></span>');
        }
        else if (this.value == 'M08') {  
            animateGrid();configurate_M8();
            $('object.graphic').attr('data','svg/Diazepam.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Cameroon</i>');
            $('li.c04').html('<i>Chad</i>');
            $('li.c05').html('<i>Egypt</i>');
            $('li.c06').html('<i>Ghana</i>');
            $('li.c07').html('<i>Kenya</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>Nigeria</i>');
            $('li.c10').html('<i>São Tomé and Príncipe</i>');
            $('li.c11').html('<i>South Africa, Gauteng Province</i>');
            $('li.c12').html('<i>Sudan</i>');
            $('li.c13').html('<i>Tanzania</i>');
            $('li.c14').html('<i>Tunisia</i>');
            $('li.c15').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Diazepam<br><i>Burkina Faso</i><br><strong>7 days</strong></span>');
            $('div.tp02').html('<span>Diazepam<br><i>Burundi</i><br><strong>7 days</strong></span>');
            $('div.tp03').html('<span>Diazepam<br><i>Cameroon</i><br><strong>7 days</strong></span>');
            $('div.tp04').html('<span>Diazepam<br><i>Chad</i><br><strong>7 days</strong></span>');
            $('div.tp05').html('<span>Diazepam<br><i>Egypt</i><br><strong>7 days</strong></span>');
            $('div.tp06').html('<span>Diazepam<br><i>Ghana</i><br><strong>7 days</strong></span>');
            $('div.tp07').html('<span>Diazepam<br><i>Kenya</i><br><strong>7 days</strong></span>');
            $('div.tp08').html('<span>Diazepam<br><i>Mauritius</i><br><strong>7 days</strong></span>');
            $('div.tp09').html('<span>Diazepam<br><i>Nigeria</i><br><strong>7 days</strong></span>');
            $('div.tp10').html('<span>Diazepam<br><i>São Tomé and Príncipe</i><br><strong>7 days</strong></span>');
            $('div.tp11').html('<span>Diazepam<br><i>South Africa, Gauteng Province</i><br><strong>7 days</strong></span>');
            $('div.tp12').html('<span>Diazepam<br><i>Sudan</i><br><strong>7 days</strong></span>');
            $('div.tp13').html('<span>Diazepam<br><i>Tanzania</i><br><strong>7 days</strong></span>');
            $('div.tp14').html('<span>Diazepam<br><i>Tunisia</i><br><strong>7 days</strong></span>');
            $('div.tp15').html('<span>Diazepam<br><i>Uganda</i><br><strong>7 days</strong></span>');
        }
        else if (this.value == 'M09') {  
            animateGrid();configurate_M9();
            $('object.graphic').attr('data','svg/Diclofenac.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Cameroon</i>');
            $('li.c03').html('<i>Congo</i>');
            $('li.c04').html('<i>Democratic Republic of Congo</i>');
            $('li.c05').html('<i>Ethiopia</i>');
            $('li.c06').html('<i>Ghana</i>');
            $('li.c07').html('<i>Mali</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>São Tomé and Príncipe</i>');
            $('li.c10').html('<i>Sudan</i>');
            $('li.c11').html('<i>Tanzania</i>');
            $('li.c12').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Diclofenac<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Diclofenac<br><i>Cameroon</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Diclofenac<br><i>Congo</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Diclofenac<br><i>Democratic Republic of Congo</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Diclofenac<br><i>Ethiopia</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Diclofenac<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Diclofenac<br><i>Mali</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Diclofenac<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Diclofenac<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Diclofenac<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Diclofenac<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Diclofenac<br><i>Uganda</i><br><strong>30 days</strong></span>');
        } 
        else if (this.value == 'M10') {  
            animateGrid();configurate_M10();
            $('object.graphic').attr('data','svg/Glibenclamide.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Cameroon</i>');
            $('li.c04').html('<i>Chad</i>');
            $('li.c05').html('<i>Congo</i>');
            $('li.c06').html('<i>Democratic Republic of Congo</i>');
            $('li.c07').html('<i>Egypt</i>');
            $('li.c08').html('<i>Ethiopia</i>');
            $('li.c09').html('<i>Ghana</i>');
            $('li.c10').html('<i>Kenya</i>');
            $('li.c11').html('<i>Mali</i>');
            $('li.c12').html('<i>Mauritius</i>');
            $('li.c13').html('<i>Morocco</i>');
            $('li.c14').html('<i>Nigeria</i>');
            $('li.c15').html('<i>São Tomé and Príncipe</i>');
            $('li.c16').html('<i>South Africa, Gauteng Province</i>');
            $('li.c17').html('<i>Sudan</i>');
            $('li.c18').html('<i>Tanzania</i>');
            $('li.c19').html('<i>Tunisia</i>');
            $('li.c20').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Glibenclamide<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Glibenclamide<br><i>Burundi</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Glibenclamide<br><i>Cameroon</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Glibenclamide<br><i>Chad</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Glibenclamide<br><i>Congo</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Glibenclamide<br><i>Democratic Republic of Congo</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Glibenclamide<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Glibenclamide<br><i>Ethiopia</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Glibenclamide<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Glibenclamide<br><i>Kenya</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Glibenclamide<br><i>Mali</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Glibenclamide<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp13').html('<span>Glibenclamide<br><i>Morocco</i><br><strong>30 days</strong></span>');
            $('div.tp14').html('<span>Glibenclamide<br><i>Nigeria</i><br><strong>30 days</strong></span>');
            $('div.tp15').html('<span>Glibenclamide<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp16').html('<span>Glibenclamide<br><i>South Africa, Gauteng Province</i><br><strong>30 days</strong></span>');
            $('div.tp17').html('<span>Glibenclamide<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp18').html('<span>Glibenclamide<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp19').html('<span>Glibenclamide<br><i>Tunisia</i><br><strong>30 days</strong></span>');
            $('div.tp20').html('<span>Glibenclamide<br><i>Uganda</i><br><strong>30 days</strong></span>');
        } 
        else if (this.value == 'M11') {  
            animateGrid();configurate_M11();
            $('object.graphic').attr('data','svg/Omeprazole.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Congo</i>');
            $('li.c04').html('<i>Democratic Republic of Congo</i>');
            $('li.c05').html('<i>Egypt</i>');
            $('li.c06').html('<i>Ghana</i>');
            $('li.c07').html('<i>Kenya</i>');
            $('li.c08').html('<i>Mauritius</i>');
            $('li.c09').html('<i>Morocco</i>');
            $('li.c10').html('<i>Nigeria</i>');
            $('li.c11').html('<i>São Tomé and Príncipe</i>');
            $('li.c12').html('<i>South Africa, Gauteng Province</i>');
            $('li.c13').html('<i>Sudan</i>');
            $('li.c14').html('<i>Tanzania</i>');
            $('li.c15').html('<i>Tunisia</i>');
            $('li.c16').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Omeprazole<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Omeprazole<br><i>Burundi</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Omeprazole<br><i>Congo</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Omeprazole<br><i>Democratic Republic of Congo</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Omeprazole<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Omeprazole<br><i>Ghana</i><br><strong>30 days</strong></span>');
            $('div.tp07').html('<span>Omeprazole<br><i>Kenya</i><br><strong>30 days</strong></span>');
            $('div.tp08').html('<span>Omeprazole<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp09').html('<span>Omeprazole<br><i>Morocco</i><br><strong>30 days</strong></span>');
            $('div.tp10').html('<span>Omeprazole<br><i>Nigeria</i><br><strong>30 days</strong></span>');
            $('div.tp11').html('<span>Omeprazole<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp12').html('<span>Omeprazole<br><i>South Africa, Gauteng Province</i><br><strong>30 days</strong></span>');
            $('div.tp13').html('<span>Omeprazole<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp14').html('<span>Omeprazole<br><i>Tanzania</i><br><strong>30 days</strong></span>');
            $('div.tp15').html('<span>Omeprazole<br><i>Tunisia</i><br><strong>30 days</strong></span>');
            $('div.tp16').html('<span>Omeprazole<br><i>Uganda</i><br><strong>30 days</strong></span>');
        } 
        else if (this.value == 'M12') {  
            animateGrid();configurate_M12();
            $('object.graphic').attr('data','svg/Paracetamol.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Ethiopia</i>');
            $('li.c03').html('<i>Mauritius</i>');
            $('li.c04').html('<i>São Tomé and Príncipe</i>');
            $('li.c05').html('<i>Sudan</i>');

            $('div.tp01').html('<span>Paracetamol<br><i>Burkina Faso</i><br><strong>3 days</strong></span>');
            $('div.tp02').html('<span>Paracetamol<br><i>Ethiopia</i><br><strong>3 days</strong></span>');
            $('div.tp03').html('<span>Paracetamol<br><i>Mauritius</i><br><strong>3 days</strong></span>');
            $('div.tp04').html('<span>Paracetamol<br><i>São Tomé and Príncipe</i><br><strong>3 days</strong></span>');
            $('div.tp05').html('<span>Paracetamol<br><i>Sudan</i><br><strong>3 days</strong></span>');
        } 
        else if (this.value == 'M13') {  
            animateGrid();configurate_M13();
            $('object.graphic').attr('data','svg/Salbutamol.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Burundi</i>');
            $('li.c03').html('<i>Cameroon</i>');
            $('li.c04').html('<i>Congo</i>');
            $('li.c05').html('<i>Democratic Republic of Congo</i>');
            $('li.c06').html('<i>Egypt</i>');
            $('li.c07').html('<i>Ghana</i>');
            $('li.c08').html('<i>Kenya</i>');
            $('li.c09').html('<i>Mali</i>');
            $('li.c10').html('<i>Mauritius</i>');
            $('li.c11').html('<i>Morocco</i>');
            $('li.c12').html('<i>São Tomé and Príncipe</i>');
            $('li.c13').html('<i>South Africa, Gauteng Province</i>');
            $('li.c14').html('<i>Sudan</i>');
            $('li.c15').html('<i>Tanzania</i>');
            $('li.c16').html('<i>Tunisia</i>');
            $('li.c17').html('<i>Uganda</i>');

            $('div.tp01').html('<span>Salbutamol<br><i>Burkina Faso</i><br><strong>no data</strong></span>');
            $('div.tp02').html('<span>Salbutamol<br><i>Burundi</i><br><strong>no data</strong></span>');
            $('div.tp03').html('<span>Salbutamol<br><i>Cameroon</i><br><strong>no data</strong></span>');
            $('div.tp04').html('<span>Salbutamol<br><i>Congo</i><br><strong>no data</strong></span>');
            $('div.tp05').html('<span>Salbutamol<br><i>Democratic Republic of Congo</i><br><strong>no data</strong></span>');
            $('div.tp06').html('<span>Salbutamol<br><i>Egypt</i><br><strong>no data</strong></span>');
            $('div.tp07').html('<span>Salbutamol<br><i>Ghana</i><br><strong>no data</strong></span>');
            $('div.tp08').html('<span>Salbutamol<br><i>Kenya</i><br><strong>no data</strong></span>');
            $('div.tp09').html('<span>Salbutamol<br><i>Mali</i><br><strong>no data</strong></span>');
            $('div.tp10').html('<span>Salbutamol<br><i>Mauritius</i><br><strong>no data</strong></span>');
            $('div.tp11').html('<span>Salbutamol<br><i>Morocco</i><br><strong>no data</strong></span>');
            $('div.tp12').html('<span>Salbutamol<br><i>São Tomé and Príncipe</i><br><strong>no data</strong></span>');
            $('div.tp13').html('<span>Salbutamol<br><i>South Africa, Gauteng Province</i><br><strong>no data</strong></span>');
            $('div.tp14').html('<span>Salbutamol<br><i>Sudan</i><br><strong>no data</strong></span>');
            $('div.tp15').html('<span>Salbutamol<br><i>Tanzania</i><br><strong>no data</strong></span>');
            $('div.tp16').html('<span>Salbutamol<br><i>Tunisia</i><br><strong>no data</strong></span>');
            $('div.tp17').html('<span>Salbutamol<br><i>Uganda</i><br><strong>no dasta</strong></span>');
        } 
        else if (this.value == 'M14') {  
            animateGrid();configurate_M14();
            $('object.graphic').attr('data','svg/Simvastatin.svg');

            $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c02').delay(20).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c05').delay(50).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
            $('li.c06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c07').delay(70).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c08').delay(80).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c09').delay(90).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c10').delay(100).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c11').delay(110).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c12').delay(120).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c13').delay(130).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c14').delay(140).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
            $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");            

            $('li.c01').html('<i>Burkina Faso</i>');
            $('li.c02').html('<i>Egypt</i>');
            $('li.c03').html('<i>Mauritius</i>');
            $('li.c04').html('<i>São Tomé and Príncipe</i>');
            $('li.c05').html('<i>Sudan</i>');
            $('li.c06').html('<i>Tanzania</i>');

            $('div.tp01').html('<span>Simvastatin<br><i>Burkina Faso</i><br><strong>30 days</strong></span>');
            $('div.tp02').html('<span>Simvastatin<br><i>Egypt</i><br><strong>30 days</strong></span>');
            $('div.tp03').html('<span>Simvastatin<br><i>Mauritius</i><br><strong>30 days</strong></span>');
            $('div.tp04').html('<span>Simvastatin<br><i>São Tomé and Príncipe</i><br><strong>30 days</strong></span>');
            $('div.tp05').html('<span>Simvastatin<br><i>Sudan</i><br><strong>30 days</strong></span>');
            $('div.tp06').html('<span>Simvastatin<br><i>Tanzania</i><br><strong>30 days</strong></span>');
        } 
    }); 
});
function configurate_M1(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key5}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Amitriptyline<br><i>EL Salvador</i><br><strong>5 days</strong></span>');
    $('div.ot02').html('<span>Amitriptyline<br><i>Peru</i><br><strong>3 days</strong></span>');
    $('div.ot03').html('<span>Amitriptyline<br><i>Colombia</i><br><strong>1 day</strong></span>');
    $('div.ot04').html('<span>Amitriptyline<br><i>Brazil</i><br><strong>3 days</strong></span>');
    $('div.ot05').html('<span>Amitriptyline<br><i>Haiti</i><br><strong>2 days</strong></span>');
    $('div.ot06').html('<span>Amitriptyline<br><i>Bolivia</i><br><strong>2 days</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Amitriptyline<br><i>Kirgizstan</i><br><strong>3 days</strong></span>');
    $('div.ot12').html('<span>Amitriptyline<br><i>Uzbekistan</i><br><strong>3 days</strong></span>');
    $('div.ot13').html('<span>Amitriptyline<br><i>Siria</i><br><strong>1 day</strong></span>');
    $('div.ot14').html('<span>Amitriptyline<br><i>Malaysia</i><br><strong>1 day</strong></span>');
    $('div.ot15').html('<span>Amitriptyline<br><i>Yemen</i><br><strong>2 days</strong></span>');
    $('div.ot16').html('<span>Amitriptyline<br><i>India</i><br><strong>1 day</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Amitriptyline<br><i>Moldova</i><br><strong>3 days</strong></span>');
    $('div.ot22').html('<span>Amitriptyline<br><i>Russia</i><br><strong>2 hours</strong></span>');
    $('div.ot23').html('<span>Amitriptyline<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Amitriptyline<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Amitriptyline<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Amitriptyline<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Amitriptyline<br><i>Fiji</i><br><strong>2 hours</strong></span>');
}  
function configurate_M2(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Amoxicillin<br><i>EL Salvador</i><br><strong>no data</strong></span>');
    $('div.ot02').html('<span>Amoxicillin<br><i>Peru</i><br><strong>4 hours</strong></span>');
    $('div.ot03').html('<span>Amoxicillin<br><i>Colombia</i><br><strong>3 hours</strong></span>');
    $('div.ot04').html('<span>Amoxicillin<br><i>Brazil</i><br><strong>1 day</strong></span>');
    $('div.ot05').html('<span>Amoxicillin<br><i>Haiti</i><br><strong>4 hours</strong></span>');
    $('div.ot06').html('<span>Amoxicillin<br><i>Bolivia</i><br><strong>6 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Amoxicillin<br><i>Kirgizstan</i><br><strong>3 days</strong></span>');
    $('div.ot12').html('<span>Amoxicillin<br><i>Uzbekistan</i><br><strong>no data</strong></span>');
    $('div.ot13').html('<span>Amoxicillin<br><i>Siria</i><br><strong>no data</strong></span>');
    $('div.ot14').html('<span>Amoxicillin<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Amoxicillin<br><i>Yemen</i><br><strong>no data</strong></span>');
    $('div.ot16').html('<span>Amoxicillin<br><i>India</i><br><strong>6 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Amoxicillin<br><i>Moldova</i><br><strong>no data</strong></span>');
    $('div.ot22').html('<span>Amoxicillin<br><i>Russia</i><br><strong>5 hours</strong></span>');
    $('div.ot23').html('<span>Amoxicillin<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Amoxicillin<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Amoxicillin<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Amoxicillin<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Amoxicillin<br><i>Fiji</i><br><strong>no data</strong></span>');
}  
function configurate_M3(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Atenolol<br><i>EL Salvador</i><br><strong>2 days</strong></span>');
    $('div.ot02').html('<span>Atenolol<br><i>Peru</i><br><strong>5 hours</strong></span>');
    $('div.ot03').html('<span>Atenolol<br><i>Colombia</i><br><strong>6 hours</strong></span>');
    $('div.ot04').html('<span>Atenolol<br><i>Brazil</i><br><strong>8 hours</strong></span>');
    $('div.ot05').html('<span>Atenolol<br><i>Haiti</i><br><strong>7 hours</strong></span>');
    $('div.ot06').html('<span>Atenolol<br><i>Bolivia</i><br><strong>1 day</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Atenolol<br><i>Kirgizstan</i><br><strong>4 hours</strong></span>');
    $('div.ot12').html('<span>Atenolol<br><i>Uzbekistan</i><br><strong>1 day</strong></span>');
    $('div.ot13').html('<span>Atenolol<br><i>Siria</i><br><strong>5 hours</strong></span>');
    $('div.ot14').html('<span>Atenolol<br><i>Malaysia</i><br><strong>5 hours</strong></span>');
    $('div.ot15').html('<span>Atenolol<br><i>Yemen</i><br><strong>4 hours</strong></span>');
    $('div.ot16').html('<span>Atenolol<br><i>India</i><br><strong>3 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Atenolol<br><i>Moldova</i><br><strong>7 hours</strong></span>');
    $('div.ot22').html('<span>Atenolol<br><i>Russia</i><br><strong>2 hours</strong></span>');
    $('div.ot23').html('<span>Atenolol<br><i>Spain</i><br><strong>0.5 hours</strong></span>');
    $('div.ot24').html('<span>Atenolol<br><i>Germany</i><br><strong>1 hour</strong></span>');
    $('div.ot25').html('<span>Atenolol<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Atenolol<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Atenolol<br><i>Fiji</i><br><strong>1 hour</strong></span>');
}
function configurate_M4(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key5}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Captopril<br><i>EL Salvador</i><br><strong>5 days</strong></span>');
    $('div.ot02').html('<span>Captopril<br><i>Peru</i><br><strong>6 hours</strong></span>');
    $('div.ot03').html('<span>Captopril<br><i>Colombia</i><br><strong>2 hours</strong></span>');
    $('div.ot04').html('<span>Captopril<br><i>Brazil</i><br><strong>2 days</strong></span>');
    $('div.ot05').html('<span>Captopril<br><i>Haiti</i><br><strong>1.5 days</strong></span>');
    $('div.ot06').html('<span>Captopril<br><i>Bolivia</i><br><strong>No data</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key5}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Captopril<br><i>Kirgizstan</i><br><strong>no data</strong></span>');
    $('div.ot12').html('<span>Captopril<br><i>Uzbekistan</i><br><strong>4.1 days</strong></span>');
    $('div.ot13').html('<span>Captopril<br><i>Siria</i><br><strong>2 days</strong></span>');
    $('div.ot14').html('<span>Captopril<br><i>Malaysia</i><br><strong>2.8 days</strong></span>');
    $('div.ot15').html('<span>Captopril<br><i>Yemen</i><br><strong>1.4 days</strong></span>');
    $('div.ot16').html('<span>Captopril<br><i>India</i><br><strong>1.1 days</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Captopril<br><i>Moldova</i><br><strong>1.3 days</strong></span>');
    $('div.ot22').html('<span>Captopril<br><i>Russia</i><br><strong>2 hours</strong></span>');
    $('div.ot23').html('<span>Captopril<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Captopril<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Captopril<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Captopril<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Captopril<br><i>Fiji</i><br><strong>2 hours</strong></span>');
}
function configurate_M5(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Ceftriaxone<br><i>EL Salvador</i><br><strong>3 days</strong></span>');
    $('div.ot02').html('<span>Ceftriaxone<br><i>Peru</i><br><strong>3 hours</strong></span>');
    $('div.ot03').html('<span>Ceftriaxone<br><i>Colombia</i><br><strong>3 hours</strong></span>');
    $('div.ot04').html('<span>Ceftriaxone<br><i>Brazil</i><br><strong>1.4 days</strong></span>');
    $('div.ot05').html('<span>Ceftriaxone<br><i>Haiti</i><br><strong>6 hours</strong></span>');
    $('div.ot06').html('<span>Ceftriaxone<br><i>Bolivia</i><br><strong>5 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Ceftriaxone<br><i>Kirgizstan</i><br><strong>1.4 days</strong></span>');
    $('div.ot12').html('<span>Ceftriaxone<br><i>Uzbekistan</i><br><strong>3 days</strong></span>');
    $('div.ot13').html('<span>Ceftriaxone<br><i>Siria</i><br><strong>1.6 days</strong></span>');
    $('div.ot14').html('<span>Ceftriaxone<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Ceftriaxone<br><i>Yemen</i><br><strong>1.7 days</strong></span>');
    $('div.ot16').html('<span>Ceftriaxone<br><i>India</i><br><strong>2 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Ceftriaxone<br><i>Moldova</i><br><strong>no data</strong></span>');
    $('div.ot22').html('<span>Ceftriaxone<br><i>Russia</i><br><strong>1 hour</strong></span>');
    $('div.ot23').html('<span>Ceftriaxone<br><i>Spain</i><br><strong>2 hours</strong></span>');
    $('div.ot24').html('<span>Ceftriaxone<br><i>Germany</i><br><strong>4 hours</strong></span>');
    $('div.ot25').html('<span>Ceftriaxone<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Ceftriaxone<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Ceftriaxone<br><i>Fiji</i><br><strong>no data</strong></span>');
}
function configurate_M6(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Ciprofloxacin<br><i>EL Salvador</i><br><strong>3 days</strong></span>');
    $('div.ot02').html('<span>Ciprofloxacin<br><i>Peru</i><br><strong>4 hours</strong></span>');
    $('div.ot03').html('<span>Ciprofloxacin<br><i>Colombia</i><br><strong>2 hours</strong></span>');
    $('div.ot04').html('<span>Ciprofloxacin<br><i>Brazil</i><br><strong>1.9 days</strong></span>');
    $('div.ot05').html('<span>Ciprofloxacin<br><i>Haiti</i><br><strong>3 hours</strong></span>');
    $('div.ot06').html('<span>Ciprofloxacin<br><i>Bolivia</i><br><strong>6 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Ciprofloxacin<br><i>Kirgizstan</i><br><strong>2 days</strong></span>');
    $('div.ot12').html('<span>Ciprofloxacin<br><i>Uzbekistan</i><br><strong>2 days</strong></span>');
    $('div.ot13').html('<span>Ciprofloxacin<br><i>Siria</i><br><strong>4 hours</strong></span>');
    $('div.ot14').html('<span>Ciprofloxacin<br><i>Malaysia</i><br><strong>1.7 days</strong></span>');
    $('div.ot15').html('<span>Ciprofloxacin<br><i>Yemen</i><br><strong>6 hours</strong></span>');
    $('div.ot16').html('<span>Ciprofloxacin<br><i>India</i><br><strong>2 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Ciprofloxacin<br><i>Moldova</i><br><strong>1.6 days</strong></span>');
    $('div.ot22').html('<span>Ciprofloxacin<br><i>Russia</i><br><strong>2 hours</strong></span>');
    $('div.ot23').html('<span>Ciprofloxacin<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Ciprofloxacin<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Ciprofloxacin<br><i>Italy</i><br><strong>2 hours</strong></span>');
    $('div.ot26').html('<span>Ciprofloxacin<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Ciprofloxacin<br><i>Fiji</i><br><strong>1 hour</strong></span>');
}
function configurate_M7(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Co-trimoxazole<br><i>EL Salvador</i><br><strong>5 hours</strong></span>');
    $('div.ot02').html('<span>Co-trimoxazole<br><i>Peru</i><br><strong>2 hours</strong></span>');
    $('div.ot03').html('<span>Co-trimoxazole<br><i>Colombia</i><br><strong>2 hours</strong></span>');
    $('div.ot04').html('<span>Co-trimoxazole<br><i>Brazil</i><br><strong>3 hours</strong></span>');
    $('div.ot05').html('<span>Co-trimoxazole<br><i>Haiti</i><br><strong>2 hours</strong></span>');
    $('div.ot06').html('<span>Co-trimoxazole<br><i>Bolivia</i><br><strong>3 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Co-trimoxazole<br><i>Kirgizstan</i><br><strong>1 day</strong></span>');
    $('div.ot12').html('<span>Co-trimoxazole<br><i>Uzbekistan</i><br><strong>1.6 days</strong></span>');
    $('div.ot13').html('<span>Co-trimoxazole<br><i>Siria</i><br><strong>2 hours</strong></span>');
    $('div.ot14').html('<span>Co-trimoxazole<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Co-trimoxazole<br><i>Yemen</i><br><strong>2 hours</strong></span>');
    $('div.ot16').html('<span>Co-trimoxazole<br><i>India</i><br><strong>1 hour</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Co-trimoxazole<br><i>Moldova</i><br><strong>no data</strong></span>');
    $('div.ot22').html('<span>Co-trimoxazole<br><i>Russia</i><br><strong>6 hours</strong></span>');
    $('div.ot23').html('<span>Co-trimoxazole<br><i>Spain</i><br><strong>0.5 hours</strong></span>');
    $('div.ot24').html('<span>Co-trimoxazole<br><i>Germany</i><br><strong>1 hour</strong></span>');
    $('div.ot25').html('<span>Co-trimoxazole<br><i>Italy</i><br><strong>0.6 hours</strong></span>');
    $('div.ot26').html('<span>Co-trimoxazole<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Co-trimoxazole<br><i>Fiji</i><br><strong>1 hour</strong></span>');
}
function configurate_M8(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Diazepam<br><i>EL Salvador</i><br><strong>2 hours</strong></span>');
    $('div.ot02').html('<span>Diazepam<br><i>Peru</i><br><strong>1 hour</strong></span>');
    $('div.ot03').html('<span>Diazepam<br><i>Colombia</i><br><strong>no data</strong></span>');
    $('div.ot04').html('<span>Diazepam<br><i>Brazil</i><br><strong>1 hour</strong></span>');
    $('div.ot05').html('<span>Diazepam<br><i>Haiti</i><br><strong>2 hours</strong></span>');
    $('div.ot06').html('<span>Diazepam<br><i>Bolivia</i><br><strong>3 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Diazepam<br><i>Kirgizstan</i><br><strong>no data</strong></span>');
    $('div.ot12').html('<span>Diazepam<br><i>Uzbekistan</i><br><strong>no data</strong></span>');
    $('div.ot13').html('<span>Diazepam<br><i>Siria</i><br><strong>1 hour</strong></span>');
    $('div.ot14').html('<span>Diazepam<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Diazepam<br><i>Yemen</i><br><strong>1 hour</strong></span>');
    $('div.ot16').html('<span>Diazepam<br><i>India</i><br><strong>1 hour</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Diazepam<br><i>Moldova</i><br><strong>1 hour</strong></span>');
    $('div.ot22').html('<span>Diazepam<br><i>Russia</i><br><strong>no data</strong></span>');
    $('div.ot23').html('<span>Diazepam<br><i>Spain</i><br><strong>0.1 hours</strong></span>');
    $('div.ot24').html('<span>Diazepam<br><i>Germany</i><br><strong>0.3 hours</strong></span>');
    $('div.ot25').html('<span>Diazepam<br><i>Italy</i><br><strong>no data</strong></span>');
    $('div.ot26').html('<span>Diazepam<br><i>Belgium</i><br><strong>0.2 hours</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Diazepam<br><i>Fiji</i><br><strong>0.1 hours</strong></span>');
}
function configurate_M9(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Diclofenac<br><i>EL Salvador</i><br><strong>No data</strong></span>');
    $('div.ot02').html('<span>Diclofenac<br><i>Peru</i><br><strong>No data</strong></span>');
    $('div.ot03').html('<span>Diclofenac<br><i>Colombia</i><br><strong>2 hours</strong></span>');
    $('div.ot04').html('<span>Diclofenac<br><i>Brazil</i><br><strong>2.4 days</strong></span>');
    $('div.ot05').html('<span>Diclofenac<br><i>Haiti</i><br><strong>1.3 days</strong></span>');
    $('div.ot06').html('<span>Diclofenac<br><i>Bolivia</i><br><strong>6 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Diclofenac<br><i>Kirgizstan</i><br><strong>2.3 days</strong></span>');
    $('div.ot12').html('<span>Diclofenac<br><i>Uzbekistan</i><br><strong>1.7 days</strong></span>');
    $('div.ot13').html('<span>Diclofenac<br><i>Siria</i><br><strong>No data</strong></span>');
    $('div.ot14').html('<span>Diclofenac<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Diclofenac<br><i>Yemen</i><br><strong>no data</strong></span>');
    $('div.ot16').html('<span>Diclofenac<br><i>India</i><br><strong>3 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Diclofenac<br><i>Moldova</i><br><strong>1.5 days</strong></span>');
    $('div.ot22').html('<span>Diclofenac<br><i>Russia</i><br><strong>4 hours</strong></span>');
    $('div.ot23').html('<span>Diclofenac<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Diclofenac<br><i>Germany</i><br><strong>1 hour</strong></span>');
    $('div.ot25').html('<span>Diclofenac<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Diclofenac<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Diclofenac<br><i>Fiji</i><br><strong>no data</strong></span>');
}
function configurate_M10(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Glibenclamide<br><i>EL Salvador</i><br><strong>2 days</strong></span>');
    $('div.ot02').html('<span>Glibenclamide<br><i>Peru</i><br><strong>6 hour</strong></span>');
    $('div.ot03').html('<span>Glibenclamide<br><i>Colombia</i><br><strong>2 hours</strong></span>');
    $('div.ot04').html('<span>Glibenclamide<br><i>Brazil</i><br><strong>7 hours</strong></span>');
    $('div.ot05').html('<span>Glibenclamide<br><i>Haiti</i><br><strong>6 hours</strong></span>');
    $('div.ot06').html('<span>Glibenclamide<br><i>Bolivia</i><br><strong>1 day</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Glibenclamide<br><i>Kirgizstan</i><br><strong>2.7 days</strong></span>');
    $('div.ot12').html('<span>Glibenclamide<br><i>Uzbekistan</i><br><strong>1.6 days</strong></span>');
    $('div.ot13').html('<span>Glibenclamide<br><i>Siria</i><br><strong>3 hours</strong></span>');
    $('div.ot14').html('<span>Glibenclamide<br><i>Malaysia</i><br><strong>3 hours</strong></span>');
    $('div.ot15').html('<span>Glibenclamide<br><i>Yemen</i><br><strong>6 hours</strong></span>');
    $('div.ot16').html('<span>Glibenclamide<br><i>India</i><br><strong>no data</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Glibenclamide<br><i>Moldova</i><br><strong>6 hours</strong></span>');
    $('div.ot22').html('<span>Glibenclamide<br><i>Russia</i><br><strong>4 hours</strong></span>');
    $('div.ot23').html('<span>Glibenclamide<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Glibenclamide<br><i>Germany</i><br><strong>1 hour</strong></span>');
    $('div.ot25').html('<span>Glibenclamide<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Glibenclamide<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Glibenclamide<br><i>Fiji</i><br><strong>1 hour</strong></span>');
}
function configurate_M11(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key5}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Omeprazole<br><i>EL Salvador</i><br><strong>5.4 days</strong></span>');
    $('div.ot02').html('<span>Omeprazole<br><i>Peru</i><br><strong>8 hours</strong></span>');
    $('div.ot03').html('<span>Omeprazole<br><i>Colombia</i><br><strong>3 hours</strong></span>');
    $('div.ot04').html('<span>Omeprazole<br><i>Brazil</i><br><strong>3.6 days</strong></span>');
    $('div.ot05').html('<span>Omeprazole<br><i>Haiti</i><br><strong>6 hours</strong></span>');
    $('div.ot06').html('<span>Omeprazole<br><i>Bolivia</i><br><strong>1.6 days</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key5}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Omeprazole<br><i>Kirgizstan</i><br><strong>2 days</strong></span>');
    $('div.ot12').html('<span>Omeprazole<br><i>Uzbekistan</i><br><strong>5.5 days</strong></span>');
    $('div.ot13').html('<span>Omeprazole<br><i>Siria</i><br><strong>4.2 days</strong></span>');
    $('div.ot14').html('<span>Omeprazole<br><i>Malaysia</i><br><strong>3.6 days</strong></span>');
    $('div.ot15').html('<span>Omeprazole<br><i>Yemen</i><br><strong>1 day</strong></span>');
    $('div.ot16').html('<span>Omeprazole<br><i>India</i><br><strong>4 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Omeprazole<br><i>Moldova</i><br><strong>1.8 days</strong></span>');
    $('div.ot22').html('<span>Omeprazole<br><i>Russia</i><br><strong>2 hours</strong></span>');
    $('div.ot23').html('<span>Omeprazole<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Omeprazole<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Omeprazole<br><i>Italy</i><br><strong>2 hours</strong></span>');
    $('div.ot26').html('<span>Omeprazole<br><i>Belgium</i><br><strong>2 hours</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Omeprazole<br><i>Fiji</i><br><strong>2 hours</strong></span>');
}
function configurate_M12(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Paracetamol<br><i>EL Salvador</i><br><strong>2 hours</strong></span>');
    $('div.ot02').html('<span>Paracetamol<br><i>Peru</i><br><strong>no data</strong></span>');
    $('div.ot03').html('<span>Paracetamol<br><i>Colombia</i><br><strong>no data</strong></span>');
    $('div.ot04').html('<span>Paracetamol<br><i>Brazil</i><br><strong>no data</strong></span>');
    $('div.ot05').html('<span>Paracetamol<br><i>Haiti</i><br><strong>2 hours</strong></span>');
    $('div.ot06').html('<span>Paracetamol<br><i>Bolivia</i><br><strong>3 hours</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Paracetamol<br><i>Kirgizstan</i><br><strong>1 day</strong></span>');
    $('div.ot12').html('<span>Paracetamol<br><i>Uzbekistan</i><br><strong>no data</strong></span>');
    $('div.ot13').html('<span>Paracetamol<br><i>Siria</i><br><strong>no data</strong></span>');
    $('div.ot14').html('<span>Paracetamol<br><i>Malaysia</i><br><strong>no data</strong></span>');
    $('div.ot15').html('<span>Paracetamol<br><i>Yemen</i><br><strong>no data</strong></span>');
    $('div.ot16').html('<span>Paracetamol<br><i>India</i><br><strong>1 hour</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Paracetamol<br><i>Moldova</i><br><strong>no data</strong></span>');
    $('div.ot22').html('<span>Paracetamol<br><i>Russia</i><br><strong>1 hour</strong></span>');
    $('div.ot23').html('<span>Paracetamol<br><i>Spain</i><br><strong>0.2 hours</strong></span>');
    $('div.ot24').html('<span>Paracetamol<br><i>Germany</i><br><strong>0.6 hours</strong></span>');
    $('div.ot25').html('<span>Paracetamol<br><i>Italy</i><br><strong>no data</strong></span>');
    $('div.ot26').html('<span>Paracetamol<br><i>Belgium</i><br><strong>no data</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Paracetamol<br><i>Fiji</i><br><strong>no data</strong></span>');
}
function configurate_M13(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Salbutamol<br><i>EL Salvador</i><br><strong>1.2 days</strong></span>');
    $('div.ot02').html('<span>Salbutamol<br><i>Peru</i><br><strong>6 hour</strong></span>');
    $('div.ot03').html('<span>Salbutamol<br><i>Colombia</i><br><strong>3 hours</strong></span>');
    $('div.ot04').html('<span>Salbutamol<br><i>Brazil</i><br><strong>no data</strong></span>');
    $('div.ot05').html('<span>Salbutamol<br><i>Haiti</i><br><strong>6 hours</strong></span>');
    $('div.ot06').html('<span>Salbutamol<br><i>Bolivia</i><br><strong>1.6 days</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key7}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Salbutamol<br><i>Kirgizstan</i><br><strong>11 days</strong></span>');
    $('div.ot12').html('<span>Salbutamol<br><i>Uzbekistan</i><br><strong>2.8 days</strong></span>');
    $('div.ot13').html('<span>Salbutamol<br><i>Siria</i><br><strong>1 day</strong></span>');
    $('div.ot14').html('<span>Salbutamol<br><i>Malaysia</i><br><strong>6 hours</strong></span>');
    $('div.ot15').html('<span>Salbutamol<br><i>Yemen</i><br><strong>5 hours</strong></span>');
    $('div.ot16').html('<span>Salbutamol<br><i>India</i><br><strong>3 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Salbutamol<br><i>Moldova</i><br><strong>2.3 days</strong></span>');
    $('div.ot22').html('<span>Salbutamol<br><i>Russia</i><br><strong>7 hours</strong></span>');
    $('div.ot23').html('<span>Salbutamol<br><i>Spain</i><br><strong>1 hour</strong></span>');
    $('div.ot24').html('<span>Salbutamol<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Salbutamol<br><i>Italy</i><br><strong>0.5 hours</strong></span>');
    $('div.ot26').html('<span>Salbutamol<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Salbutamol<br><i>Fiji</i><br><strong>2 hours</strong></span>');
}
function configurate_M14(){
    var key0 = '#A5A5A5';
    var key1 = '#b9a778';
    var key2 = '#90825e';
    var key3 = '#705e76';
    var key5 = '#ac79a4';
    var key7 = '#993556';
    var key30 = '#790800';

    $('.set01 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot02').delay(20).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot03').delay(30).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot04').delay(40).velocity({backgroundColor: key3}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot05').delay(50).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set01 li.ot06').delay(60).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");

    $('div.ot01').html('<span>Simvastatin<br><i>EL Salvador</i><br><strong>no data</strong></span>');
    $('div.ot02').html('<span>Simvastatin<br><i>Peru</i><br><strong>no data</strong></span>');
    $('div.ot03').html('<span>Simvastatin<br><i>Colombia</i><br><strong>3.6 days</strong></span>');
    $('div.ot04').html('<span>Simvastatin<br><i>Brazil</i><br><strong>3.8 days</strong></span>');
    $('div.ot05').html('<span>Simvastatin<br><i>Haiti</i><br><strong>2 days</strong></span>');
    $('div.ot06').html('<span>Simvastatin<br><i>Bolivia</i><br><strong>no data</strong></span>');

    $('.set02 li.ot01').delay(0).velocity({backgroundColor: key30}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot02').delay(20).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot03').delay(30).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot04').delay(40).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot05').delay(50).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set02 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot11').html('<span>Simvastatin<br><i>Kirgizstan</i><br><strong>25 days</strong></span>');
    $('div.ot12').html('<span>Simvastatin<br><i>Uzbekistan</i><br><strong>no data</strong></span>');
    $('div.ot13').html('<span>Simvastatin<br><i>Siria</i><br><strong>no data</strong></span>');
    $('div.ot14').html('<span>Simvastatin<br><i>Malaysia</i><br><strong>2.2 days</strong></span>');
    $('div.ot15').html('<span>Simvastatin<br><i>Yemen</i><br><strong>no data</strong></span>');
    $('div.ot16').html('<span>Simvastatin<br><i>India</i><br><strong>5 hours</strong></span>');

    $('.set03 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot02').delay(20).velocity({backgroundColor: key2}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot03').delay(30).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot04').delay(40).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot05').delay(50).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");
    $('.set03 li.ot06').delay(60).velocity({backgroundColor: key1}, { duration: 100 }, "easeOutSine");

    $('div.ot21').html('<span>Simvastatin<br><i>Moldova</i><br><strong>no data</strong></span>');
    $('div.ot22').html('<span>Simvastatin<br><i>Russia</i><br><strong>2.5 days</strong></span>');
    $('div.ot23').html('<span>Simvastatin<br><i>Spain</i><br><strong>0.6 hours</strong></span>');
    $('div.ot24').html('<span>Simvastatin<br><i>Germany</i><br><strong>2 hours</strong></span>');
    $('div.ot25').html('<span>Simvastatin<br><i>Italy</i><br><strong>1 hour</strong></span>');
    $('div.ot26').html('<span>Simvastatin<br><i>Belgium</i><br><strong>1 hour</strong></span>');

    $('.set04 li.ot01').delay(0).velocity({backgroundColor: key0}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot02').delay(20).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot03').delay(30).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot04').delay(40).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot05').delay(50).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");
    $('.set04 li.ot06').delay(60).velocity({opacity: '0', scale: '0.1'}, { duration: 100 }, "easeOutSine");

    $('div.ot31').html('<span>Simvastatin<br><i>Fiji</i><br><strong>no data</strong></span>');
}

function initialize(){
    var key0 = '#A5A5A5';
    var key1 = '#90825e';
    var key3 = '#705e76';
    var key7 = '#993556';
    var key30 = '#790800';

    $('li.c01').delay(0).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c02').delay(20).velocity({backgroundColor: key7}, { duration: 500 }, "easeOutSine");
    $('li.c03').delay(30).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c04').delay(40).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c05').delay(50).velocity({backgroundColor: key1}, { duration: 500 }, "easeOutSine");
    $('li.c06').delay(60).velocity({backgroundColor: key7}, { duration: 500 }, "easeOutSine");
    $('li.c07').delay(70).velocity({backgroundColor: key7}, { duration: 500 }, "easeOutSine");
    $('li.c08').delay(80).velocity({backgroundColor: key7}, { duration: 500 }, "easeOutSine");
    $('li.c09').delay(90).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c10').delay(100).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c11').delay(110).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c12').delay(120).velocity({backgroundColor: key3}, { duration: 500 }, "easeOutSine");
    $('li.c13').delay(130).velocity({backgroundColor: key0}, { duration: 500 }, "easeOutSine");
    $('li.c14').delay(140).velocity({backgroundColor: key30}, { duration: 500 }, "easeOutSine");
    $('li.c15').delay(150).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine");
    $('li.c16').delay(160).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine");
    $('li.c17').delay(170).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine");
    $('li.c18').delay(180).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine");
    $('li.c19').delay(190).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine");
    $('li.c20').delay(200).velocity({opacity: '0', scale: '0.1'}, { duration: 500 }, "easeOutSine"); 

    $('div.tp01').html('<span>Amitriptyline<br><strong>30 days of work</strong></span>');
    $('div.tp02').html('<span>Amoxicillin<br><strong>7 days of work</strong></span>');
    $('div.tp03').html('<span>Atenolol<br><strong>30 days of work</strong></span>');
    $('div.tp04').html('<span>Captopril<br><strong>30 days of work</strong></span>');
    $('div.tp05').html('<span>Ceftriaxone<br><strong>1 day of work</strong></span>');
    $('div.tp06').html('<span>Ciprofloxacin<br><strong>7 days of work</strong></span>');
    $('div.tp07').html('<span>Co-trimoxazole<br><strong>7 days of work</strong></span>');
    $('div.tp08').html('<span>Diazepam<br><strong>7 days of work</strong></span>');
    $('div.tp09').html('<span>Diclofenac<br><strong>30 days of work</strong></span>');
    $('div.tp10').html('<span>Glibenclamide<br><strong>30 days of work</strong></span>');
    $('div.tp11').html('<span>Omeprazole<br><strong>30 days of work</strong></span>');
    $('div.tp12').html('<span>Paracetamol<br><strong>3 days of work</strong></span>');
    $('div.tp13').html('<span>Salbutamol<br><i>No data</i></span>');
    $('div.tp14').html('<span>Simvastatin<br><strong>30 days of work</strong></span>');
}     
function animateGrid(){
    $('#hint').animate({opacity: 1},1000).delay(500).animate({opacity: 0},500);
    $('.set01 li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('.set02 li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('.set03 li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('.set04 li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('.set05 li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('#canvas li').css({backgroundColor: '#A5A5A5', opacity: 1});
    $('li.c01').delay(0).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c02').delay(20).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c03').delay(30).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c04').delay(40).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c05').delay(50).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c06').delay(60).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c07').delay(70).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c08').delay(80).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c09').delay(90).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c10').delay(100).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c11').delay(110).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c12').delay(120).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c13').delay(130).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c14').delay(140).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c15').delay(150).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c16').delay(160).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c17').delay(170).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c18').delay(180).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c19').delay(190).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");
    $('li.c20').delay(200).velocity({scale: '1', rotateX: "+=360deg"}, { duration: 500 }, "easeOutSine");

    $('.set01 li').delay(300).velocity({rotateX: "+=180deg", scale: '1'}, { duration: 500 }, "easeOutSine");
    $('.set02 li').delay(400).velocity({rotateX: "+=180deg", scale: '1'}, { duration: 500 }, "easeOutSine");
    $('.set03 li').delay(500).velocity({rotateX: "+=180deg", scale: '1'}, { duration: 500 }, "easeOutSine");
    $('.set04 li').delay(600).velocity({rotateX: "+=180deg", scale: '1'}, { duration: 500 }, "easeOutSine");
    $('.set05 li').delay(700).velocity({rotateX: "+=180deg", scale: '1'}, { duration: 500 }, "easeOutSine");

    $('li.c01, li.c02, li.c03, li.c04, li.c05, li.c06, li.c07, li.c08, li.c09, li.c10, li.c11, li.c12, li.c13, li.c14, li.c15, li.c16, li.c17, li.c18, li.c19, li.c20').html('');
}

$('li.c01').mouseover(function() {$('div.tp01').show()});
$('li.c02').mouseover(function() {$('div.tp02').show()});
$('li.c03').mouseover(function() {$('div.tp03').show()});
$('li.c04').mouseover(function() {$('div.tp04').show()});
$('li.c05').mouseover(function() {$('div.tp05').show()});
$('li.c06').mouseover(function() {$('div.tp06').show()});
$('li.c07').mouseover(function() {$('div.tp07').show()});
$('li.c08').mouseover(function() {$('div.tp08').show()});
$('li.c09').mouseover(function() {$('div.tp09').show()});
$('li.c10').mouseover(function() {$('div.tp10').show()});
$('li.c11').mouseover(function() {$('div.tp11').show()});
$('li.c12').mouseover(function() {$('div.tp12').show()});
$('li.c13').mouseover(function() {$('div.tp13').show()});
$('li.c14').mouseover(function() {$('div.tp14').show()});
$('li.c15').mouseover(function() {$('div.tp15').show()});
$('li.c16').mouseover(function() {$('div.tp16').show()});
$('li.c17').mouseover(function() {$('div.tp17').show()});
$('li.c18').mouseover(function() {$('div.tp18').show()});
$('li.c19').mouseover(function() {$('div.tp19').show()});
$('li.c20').mouseover(function() {$('div.tp20').show()});

$('.set01 li.ot01').mouseover(function() {$('div.ot01').show()});
$('.set01 li.ot02').mouseover(function() {$('div.ot02').show()});
$('.set01 li.ot03').mouseover(function() {$('div.ot03').show()});
$('.set01 li.ot04').mouseover(function() {$('div.ot04').show()});
$('.set01 li.ot05').mouseover(function() {$('div.ot05').show()});
$('.set01 li.ot06').mouseover(function() {$('div.ot06').show()});

$('.set02 li.ot01').mouseover(function() {$('div.ot11').show()});
$('.set02 li.ot02').mouseover(function() {$('div.ot12').show()});
$('.set02 li.ot03').mouseover(function() {$('div.ot13').show()});
$('.set02 li.ot04').mouseover(function() {$('div.ot14').show()});
$('.set02 li.ot05').mouseover(function() {$('div.ot15').show()});
$('.set02 li.ot06').mouseover(function() {$('div.ot16').show()});

$('.set03 li.ot01').mouseover(function() {$('div.ot21').show()});
$('.set03 li.ot02').mouseover(function() {$('div.ot22').show()});
$('.set03 li.ot03').mouseover(function() {$('div.ot23').show()});
$('.set03 li.ot04').mouseover(function() {$('div.ot24').show()});
$('.set03 li.ot05').mouseover(function() {$('div.ot25').show()});
$('.set03 li.ot06').mouseover(function() {$('div.ot26').show()});

$('.set04 li.ot01').mouseover(function() {$('div.ot31').show()});
$('.set04 li.ot02').mouseover(function() {$('div.ot32').show()});
$('.set04 li.ot03').mouseover(function() {$('div.ot33').show()});
$('.set04 li.ot04').mouseover(function() {$('div.ot34').show()});
$('.set04 li.ot05').mouseover(function() {$('div.ot35').show()});
$('.set04 li.ot06').mouseover(function() {$('div.ot36').show()});

$('.set05 li.ot01').mouseover(function() {$('div.ot41').show()});
$('.set05 li.ot02').mouseover(function() {$('div.ot42').show()});
$('.set05 li.ot03').mouseover(function() {$('div.ot43').show()});
$('.set05 li.ot04').mouseover(function() {$('div.ot44').show()});
$('.set05 li.ot05').mouseover(function() {$('div.ot45').show()});
$('.set05 li.ot06').mouseover(function() {$('div.ot46').show()});

$('#canvas li, .set01 li, .set02 li, .set03 li, .set04 li, .set05 li').mouseout(function() {$('.tooltip').hide()});


$('li.c01').click(function() {$('div.tp01').toggle()});
$('li.c02').click(function() {$('div.tp02').toggle()});
$('li.c03').click(function() {$('div.tp03').toggle()});
$('li.c04').click(function() {$('div.tp04').toggle()});
$('li.c05').click(function() {$('div.tp05').toggle()});
$('li.c06').click(function() {$('div.tp06').toggle()});
$('li.c07').click(function() {$('div.tp07').toggle()});
$('li.c08').click(function() {$('div.tp08').toggle()});
$('li.c09').click(function() {$('div.tp09').toggle()});
$('li.c10').click(function() {$('div.tp10').toggle()});
$('li.c11').click(function() {$('div.tp11').toggle()});
$('li.c12').click(function() {$('div.tp12').toggle()});
$('li.c13').click(function() {$('div.tp13').toggle()});
$('li.c14').click(function() {$('div.tp14').toggle()});
$('li.c15').click(function() {$('div.tp15').toggle()});
$('li.c16').click(function() {$('div.tp16').toggle()});
$('li.c17').click(function() {$('div.tp17').toggle()});
$('li.c18').click(function() {$('div.tp18').toggle()});
$('li.c19').click(function() {$('div.tp19').toggle()});
$('li.c20').click(function() {$('div.tp20').toggle()});

$(document).on('mousemove', function(e){
    var posX =  e.pageX - 70;
    var posY =  e.pageY - 100;
    $('.tooltip').css({
       left:  posX,
       top:   posY
    });
});