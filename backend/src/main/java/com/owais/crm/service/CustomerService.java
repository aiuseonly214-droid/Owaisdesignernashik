package com.owais.crm.service;

import com.owais.crm.entity.Customer;
import com.owais.crm.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository repository;

    public List<Customer> findAll() {
        return repository.findAll();
    }

    public Customer findById(UUID id) {
        return repository.findById(id).orElse(null);
    }

    public Customer save(Customer customer) {
        return repository.save(customer);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
