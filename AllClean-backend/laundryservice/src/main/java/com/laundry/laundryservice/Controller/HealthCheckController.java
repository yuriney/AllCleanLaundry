package com.laundry.laundryservice.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HealthCheckController {

    @GetMapping("/healthcheck")
    public Map<String, String> healthcheck() {
        return Map.of(
                "status", "UP",
                "message", "Laundry Service API is running 🚀"
        );
    }
}
