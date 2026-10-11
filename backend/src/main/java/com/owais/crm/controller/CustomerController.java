package com.owais.crm.controller;

import com.owais.crm.entity.Customer;
import com.owais.crm.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService service;

    @GetMapping
    public List<Customer> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getById(@PathVariable UUID id) {
        Customer customer = service.findById(id);
        return customer != null ? ResponseEntity.ok(customer) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Customer create(@RequestBody Customer customer) {
        return service.save(customer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> update(@PathVariable UUID id, @RequestBody Customer customer) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        customer.setId(id);
        return ResponseEntity.ok(service.save(customer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
