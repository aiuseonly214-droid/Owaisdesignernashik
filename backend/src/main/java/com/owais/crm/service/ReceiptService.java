package com.owais.crm.service;

import com.owais.crm.entity.Receipt;
import com.owais.crm.repository.ReceiptRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReceiptService {
    private final ReceiptRepository repository;

    public List<Receipt> findAll() {
        return repository.findAll();
    }

    public Receipt findById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public Receipt save(Receipt receipt) {
        return repository.save(receipt);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
