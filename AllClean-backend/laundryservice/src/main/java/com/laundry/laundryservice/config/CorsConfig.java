package com.laundry.laundryservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins( "https://allcleanlaundry.onrender.com",
                        "https://allcleanlaundry-production.up.railway.app")
                .allowedMethods("*");
    }
}
