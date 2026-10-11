package com.owais.crm.controller;

import com.owais.crm.entity.Receipt;
import com.owais.crm.service.ReceiptService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/receipts")
@RequiredArgsConstructor
public class ReceiptController {

    private final ReceiptService service;

    @GetMapping
    public List<Receipt> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Receipt> getById(@PathVariable UUID id) {
        Receipt receipt = service.findById(id);
        return receipt != null ? ResponseEntity.ok(receipt) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Receipt create(@RequestBody Receipt receipt) {
        return service.save(receipt);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Receipt> update(@PathVariable UUID id, @RequestBody Receipt receipt) {
        if (service.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        receipt.setId(id);
        return ResponseEntity.ok(service.save(receipt));
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
