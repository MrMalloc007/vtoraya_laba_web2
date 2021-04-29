<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<jsp:useBean id="tochka_list" class="com.example.vtoraya_laba_web2.Tochka_list" scope="session" />
<%@ page import="java.util.stream.Stream" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="main">
    <div class="shapka"><p>SHAPKA</p>
        <div>
            <p>Алентьев Александр Георгиевич</p>
            <p>Р3232</p>
            <p id="variant">Вариант: <a class="link" href="https://se.ifmo.ru/ru/courses/web" target="_blank">12938</a></p>
        </div>
    </div>

    <div class="image">
        <canvas class="canvas" width="500" height="500" id="canvas">
        </canvas>
    </div>

    <div class="inputvalue">
        <form method="post" action="ControllerServlet" name="my" id="mainform">
            <div class="zagolovok1">
                <p>INPUTVALUE</p>
            </div>

            <div class="inputinpvalue">
                <div class="XXX">
                    <p>X</p>
                    <input type="checkbox" name="coordinate_X" value="-4" onclick=" X.value = -4 "  >-4
                    <input type="checkbox" name="coordinate_X" value="-3" onclick=" X.value = -3 ">-3
                    <input type="checkbox" name="coordinate_X" value="-2" onclick=" X.value = -2 ">-2
                    <input type="checkbox" name="coordinate_X" value="-1" onclick=" X.value = -1 ">-1
                    <input type="checkbox" name="coordinate_X" value="0" onclick=" X.value = 0 ">0
                    <input type="checkbox" name="coordinate_X" value="1" onclick=" X.value = 1 ">1
                    <input type="checkbox" name="coordinate_X" value="2" onclick=" X.value = 2 ">2
                    <input type="checkbox" name="coordinate_X" value="3" onclick=" X.value = 3 ">3
                    <input type="checkbox" name="coordinate_X" value="4" onclick=" X.value = 4 ">4

                    <input type="hidden" id="X" name="coor_X">
                </div>
                <div class="tablevalue">
                    <p>Y</p>
                    <p>Введите число от -5 до 3</p>
                    <input class="inputtable" id="cordY" tabindex="1" name="coordinata_Y" type="text" >
                </div>

                <div class="tablevalue" >
                    <p>R</p>
                    <input class="inputbutton" id="mybutton_1" type="button" name="coordinata_R" value="1" onclick=" R.value = 1 "> 1
                    <input class="inputbutton" id="mybutton_2" type="button" name="coordinata_R" value="2" onclick=" R.value = 2 "> 2
                    <input class="inputbutton" id="mybutton_3" type="button" name="coordinata_R" value="3" onclick=" R.value = 3 "> 3
                    <input class="inputbutton" id="mybutton_4" type="button" name="coordinata_R" value="4" onclick=" R.value = 4 "> 4
                    <input class="inputbutton" id="mybutton_5" type="button" name="coordinata_R" value="5" onclick=" R.value = 5 "> 5

                    <input type="hidden" id="R" name="coor_R">
                </div>
                <div class="buttonsent"><button id="submint" type="submit">Отправить</button></div>
                <div class="buttonresent"><button id="resent" type="reset">Сбросить</button></div>
            </div>
        </form>
    </div>
    <div class="outputvalue">
        <div class="zagolovok2">
            <p>OUTPUTVALUE</p>
        </div>
        <div class="info">INFORMATION
            <p id="infoinfo"></p>
        </div>
        <div class="table">
            <table class="table1table">
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>currentttime</th>
                    <th>scripttime</th>
                    <th>Result</th>
                </tr>
                <c:forEach var="tochks" items="${tochka_list.informationList}">
                    <tr>
                        <td>${tochks.coordinate_x}</td>
                        <td>${tochks.coordinate_y}</td>
                        <td>${tochks.radius}</td>
                        <td>${tochks.runTime}</td>
                        <td>${tochks.localTime}</td>
                        <td>${tochks.result}</td>
                    </tr>
                </c:forEach>
            </table>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" type=""></script>
<script src="main.js"></script>
</body>
</html>
