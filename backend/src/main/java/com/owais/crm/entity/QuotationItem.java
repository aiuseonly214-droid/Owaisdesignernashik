package com.owais.crm.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Entity
@Table(name = "quotation_items")
public class QuotationItem {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quotation_id", nullable = false)
    private Quotation quotation;

    @Column(nullable = false)
    private Integer sr = 1;

    @Column(nullable = false)
    private String particular = "";

    private String description;

    private String unit;

    @Column(nullable = false)
    private BigDecimal qty = BigDecimal.ONE;

    @Column(nullable = false)
    private BigDecimal rate = BigDecimal.ZERO;

    @Column(nullable = false)
    private BigDecimal amount = BigDecimal.ZERO;
}
