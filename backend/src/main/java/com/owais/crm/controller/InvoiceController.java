package com.owais.crm.controller;

import com.owais.crm.entity.Invoice;
import com.owais.crm.service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService service;

    @GetMapping
    public List<Invoice> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getById(@PathVariable UUID id) {
        Invoice invoice = service.findById(id);
        return invoice != null ? ResponseEntity.ok(invoice) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Invoice create(@RequestBody Invoice invoice) {
        return service.save(invoice);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Invoice> update(@PathVariable UUID id, @RequestBody Invoice invoice) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        invoice.setId(id);
        return ResponseEntity.ok(service.save(invoice));
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
