package com.example.vtoraya_laba_web2;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ServletContext servletContext = getServletContext(); // с помощью метода getServletContext() получаем объект ServletContext, который представляет суть запроса.
        RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/com.example.AreaCheckServlet"); // с помощью метода(getRequestDispatcher), объекта servletContext перенаправляем запрос(адресс указываем в параметр метода getRequestDispatcher)
        requestDispatcher.forward(request,response);// у объекта requestDispatcher вызываем метод forward(перенаправляет запрос на другой ресурс)

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{

        ServletContext servletContext = getServletContext();
        RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/index.jsp");
        requestDispatcher.forward(request,response);

    }
}
